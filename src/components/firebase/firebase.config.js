// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVus3X2d-1T66vW97SjMJbyHCwRS4yPFE",
  authDomain: "automotive-store-eb3dd.firebaseapp.com",
  projectId: "automotive-store-eb3dd",
  storageBucket: "automotive-store-eb3dd.appspot.com",
  messagingSenderId: "269637107348",
  appId: "1:269637107348:web:3ab69787d6dfc5957efe81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;