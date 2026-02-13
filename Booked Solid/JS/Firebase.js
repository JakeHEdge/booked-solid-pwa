import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCvP72mdioyocpKrYoCFTpagl0XW9-ML40",
  authDomain: "booked-solid.firebaseapp.com",
  projectId: "booked-solid",
  storageBucket: "booked-solid.firebasestorage.app",
  messagingSenderId: "948629831234",
  appId: "1:948629831234:web:b8f125c8eca4f6874fb7db",
  measurementId: "G-5LR19N3WB1"

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export let userId = localStorage.getItem("userId");

if (!userId) {
  userId = crypto.randomUUID();
  localStorage.setItem("userId", userId);
}