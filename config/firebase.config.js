// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getfirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "rentify-aba0b.firebaseapp.com",
  projectId: "rentify-aba0b",
  storageBucket: "rentify-aba0b.firebasestorage.app",
  messagingSenderId: "856525488430",
  appId: "1:856525488430:web:0cf4569e2fcd3a00ebbabf"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig): getApp();
const db = getfirestore(app);
const storage = getStorage(app);

export{db,storage}