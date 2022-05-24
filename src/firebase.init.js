// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9O6W_wNgf0irilzg9ujX6wdRpB6DNe5U",
  authDomain: "tools-house-155bc.firebaseapp.com",
  projectId: "tools-house-155bc",
  storageBucket: "tools-house-155bc.appspot.com",
  messagingSenderId: "965263764252",
  appId: "1:965263764252:web:75c7dce153d2e0be5328d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;