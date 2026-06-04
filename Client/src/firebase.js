// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2d19e.firebaseapp.com",
  projectId: "mern-blog-2d19e",
  storageBucket: "mern-blog-2d19e.firebasestorage.app",
  messagingSenderId: "203657085650",
  appId: "1:203657085650:web:3df066ce6fbb4a5278230b",
  measurementId: "G-S0W20D7BRS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
