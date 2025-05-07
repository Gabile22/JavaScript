// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZhaZFLXo93QcB6MOXhTkkAsnSsYyPTis",

  authDomain: "suzano-124a4.firebaseapp.com",

  projectId: "suzano-124a4",

  storageBucket: "suzano-124a4.appspot.com",

  messagingSenderId: "162112412626",

  appId: "1:162112412626:web:d41b30fdd68853df61460b",

  measurementId: "G-NHNGMJ3M8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const autenticacao = getAuth(app);