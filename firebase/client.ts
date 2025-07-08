import { initializeApp,getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "ai-mock-interviews-69ce0.firebaseapp.com",
    projectId: "ai-mock-interviews-69ce0",
    storageBucket: "ai-mock-interviews-69ce0.firebasestorage.app",
    messagingSenderId: "500631745410",
    appId: "1:500631745410:web:df288d5b59b680fed8959b",
    measurementId: "G-BZ257NN9R9"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
