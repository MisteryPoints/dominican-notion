import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyA-db0OgdOz7tiyJu7s-Tugd1x_4aeFrrk",
  authDomain: "dominican-notion.firebaseapp.com",
  projectId: "dominican-notion",
  storageBucket: "dominican-notion.firebasestorage.app",
  messagingSenderId: "780459578120",
  appId: "1:780459578120:web:067b79b3dfca783e5b92bd",
  measurementId: "G-7KN0QTG3DN"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app); 

export { db };