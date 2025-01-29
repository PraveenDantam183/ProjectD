import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBZFI5Hup69o0gFGRv1HSJqrlJ9vzSGzbA",
  authDomain: "projectd-e4f8e.firebaseapp.com",
  projectId: "projectd-e4f8e",
  storageBucket: "projectd-e4f8e.firebasestorage.app",
  messagingSenderId: "111076760983",
  appId: "1:111076760983:web:4ad23f559ed960169c38d2",
  measurementId: "G-8BW0Y6K7SD"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Add Firestore export