// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1DD-_aDrarNdMndlomrd7lbqwlnBlSYk",
  authDomain: "storyverse-bookstore.firebaseapp.com",
  projectId: "storyverse-bookstore",
  storageBucket: "storyverse-bookstore.appspot.com",
  messagingSenderId: "84351872618",
  appId: "1:84351872618:web:78e8f6a6b1652f0edf2413"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;