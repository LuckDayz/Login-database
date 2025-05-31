// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF_M_Oms9Jndx7zkj_cXWRrCBiB-p6VB8",
  authDomain: "sign-in-page-32071.firebaseapp.com",
  projectId: "sign-in-page-32071",
  storageBucket: "sign-in-page-32071.firebasestorage.app",
  messagingSenderId: "591710650683",
  appId: "1:591710650683:web:b2a1fcbe8df95c8820f71e",
  measurementId: "G-79DMN6YHX9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth =getAuth(app);
export const db= getFirestore(app)
export default app;