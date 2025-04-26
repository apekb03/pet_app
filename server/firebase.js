import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { } from 'firebase/messaging';
// import { } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyAlE6t5UXcX0KY0aLdvopS_-fU2uPSNHrc",
    authDomain: "cougar-pet.firebaseapp.com",
    projectId: "cougar-pet",
    storageBucket: "cougar-pet.firebasestorage.app",
    messagingSenderId: "3678992603",
    appId: "1:3678992603:web:b5eab9169e9f0a596074fe",
    measurementId: "G-GS4CDDEN06"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);