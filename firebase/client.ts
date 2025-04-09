// Import the functions you need from the SDKs you need
import { initializeApp,getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtMSi6rjyVoQ-JLJDkeqmlciccZO2akfo",
    authDomain: "ai-mock-interviews-69ce0.firebaseapp.com",
    projectId: "ai-mock-interviews-69ce0",
    storageBucket: "ai-mock-interviews-69ce0.firebasestorage.app",
    messagingSenderId: "500631745410",
    appId: "1:500631745410:web:df288d5b59b680fed8959b",
    measurementId: "G-BZ257NN9R9"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);