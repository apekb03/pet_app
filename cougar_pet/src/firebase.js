// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOQqM30tkXrRz0fa2vkjXUK8neJdV9SS0",
  authDomain: "cougar-e1986.firebaseapp.com",
  projectId: "cougar-e1986",
  storageBucket: "cougar-e1986.firebasestorage.app",
  messagingSenderId: "349639948572",
  appId: "1:349639948572:web:4b60ad4256f15d4368a2d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
