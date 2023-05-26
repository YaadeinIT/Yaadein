// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRZcnE8K_TQh7l4tvPlcLNURod57t1xRw",
  authDomain: "yaadein-429c1.firebaseapp.com",
  projectId: "yaadein-429c1",
  storageBucket: "yaadein-429c1.appspot.com",
  messagingSenderId: "134857364037",
  appId: "1:134857364037:web:f58a175d228b6cbbbc492c",
  measurementId: "G-DXCW2Y5PF7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
