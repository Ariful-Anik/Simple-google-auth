// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6Z2fyxgZbxz_9O3Plmgw4FXFoAu9UthQ",
  authDomain: "auth-mohamilon-3fe85.firebaseapp.com",
  projectId: "auth-mohamilon-3fe85",
  storageBucket: "auth-mohamilon-3fe85.firebasestorage.app",
  messagingSenderId: "917102299723",
  appId: "1:917102299723:web:c35b5b613107964256dbce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);