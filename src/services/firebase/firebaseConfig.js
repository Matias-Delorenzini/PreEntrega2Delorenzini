// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmKaH8qboaFaRK4Fm6AB7k66pM9TNvYes",
  authDomain: "camisetas-ecommerce.firebaseapp.com",
  projectId: "camisetas-ecommerce",
  storageBucket: "camisetas-ecommerce.appspot.com",
  messagingSenderId: "466043829666",
  appId: "1:466043829666:web:a26188e4d8e7d8acfd46fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)