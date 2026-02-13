import { db, userId } from "/JS/Firebase.js";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const cartContainer = document.getElementById("cart-items");

// LOAD CART
async function loadCart() {
  const itemsRef = collection(
    db,
    "users",
    userId,
    "carts",
    "active",
    "items"
  );

  const snapshot = await getDocs(itemsRef);

  if (snapshot.empty) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartContainer.innerHTML = "";

  for (const itemDoc of snapshot.docs) {
    const bookId = itemDoc.id;

    const bookRef = doc(db, "books", bookId);
    const bookSnap = await getDoc(bookRef);

    if (bookSnap.exists()) {
      const book = bookSnap.data();

      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <p>£${book.price}</p>
        <hr>
      `;

      cartContainer.appendChild(div);
    }
  }
}

loadCart();

// CLEAR CART (must be on window)
window.clearCart = async function () {
  const itemsRef = collection(
    db,
    "users",
    userId,
    "carts",
    "active",
    "items"
  );

  const snapshot = await getDocs(itemsRef);

  snapshot.forEach(item => {
    deleteDoc(item.ref);
  });

  cartContainer.innerHTML = "<p>Your cart is empty.</p>";
};
