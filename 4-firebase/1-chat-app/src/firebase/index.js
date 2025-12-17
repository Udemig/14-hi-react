// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//! 1)  İMPORT
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRbEGu-eQe8mGz1l_-yvyVSQIjUAnq5cE",
  authDomain: "hi-chat-c9757.firebaseapp.com",
  projectId: "hi-chat-c9757",
  storageBucket: "hi-chat-c9757.firebasestorage.app",
  messagingSenderId: "1068538508972",
  appId: "1:1068538508972:web:b8457a7ab29059ea49d109",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//! 2) auth servisinin referansını al
export const auth = getAuth(app);

//! 3) google sağlayıcısının kurulumu
export const provider = new GoogleAuthProvider();

//! 4) veritabanı servisinin referansını al
export const db = getFirestore(app);
