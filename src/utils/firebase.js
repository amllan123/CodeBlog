// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "codeblog-cdcbc.firebaseapp.com",
  projectId: "codeblog-cdcbc",
  storageBucket: "codeblog-cdcbc.appspot.com",
  messagingSenderId: "234321246971",
  appId: "1:234321246971:web:387dfe58df1a8468b40e5e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);