import { doc, setDoc } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { db, userId } from "./Firebase.js";

// Make function global so HTML onclick can see it
window.addToCart = function (bookID) {
  setDoc(
    doc(db, "users", userId, "carts", "active", "items", bookID),
    {
      addedAt: Date.now()
    }
  )
};