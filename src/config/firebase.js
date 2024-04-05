// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCMGsqBQCLpgGXk3i9T-KQ8JgL4ZmJMUU",
  authDomain: "pengcrow-wedding-2024.firebaseapp.com",
  projectId: "pengcrow-wedding-2024",
  storageBucket: "pengcrow-wedding-2024.appspot.com",
  messagingSenderId: "666194768653",
  appId: "1:666194768653:web:25a1c8b47ff2a03587f644",
  measurementId: "G-JJQ4S6QY7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);