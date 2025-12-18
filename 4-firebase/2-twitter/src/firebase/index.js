// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3V7mg8eNmOAmKV_WFBvHEgCKB-jvIH4w",
  authDomain: "hi-twitter-44552.firebaseapp.com",
  projectId: "hi-twitter-44552",
  storageBucket: "hi-twitter-44552.firebasestorage.app",
  messagingSenderId: "339500356336",
  appId: "1:339500356336:web:e38fff43f9071ac30aa835",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth servisinin referansını al
export const auth = getAuth(app);

// google sağlayıcısnın kurulumunu yap
export const provider = new GoogleAuthProvider();
