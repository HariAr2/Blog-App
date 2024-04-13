// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-dba5f.firebaseapp.com",
  projectId: "blog-dba5f",
  storageBucket: "blog-dba5f.appspot.com",
  messagingSenderId: "307973015348",
  appId: "1:307973015348:web:5c8294e88bbd621b12c761",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
