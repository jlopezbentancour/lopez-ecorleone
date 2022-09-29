// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLNMPyzdtwDJ9PirUfrN6JoKR3zfgIYIE",
  authDomain: "react-lopez.firebaseapp.com",
  projectId: "react-lopez",
  storageBucket: "react-lopez.appspot.com",
  messagingSenderId: "83454722117",
  appId: "1:83454722117:web:f7774f70429deb446a632c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
