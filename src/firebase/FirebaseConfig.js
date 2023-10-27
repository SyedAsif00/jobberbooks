// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: PROCESS.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: PROCESS.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: PROCESS.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: PROCESS.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: PROCESS.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: PROCESS.env.NEXT_PUBLIC_FIREBASE_MESSAGING_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
