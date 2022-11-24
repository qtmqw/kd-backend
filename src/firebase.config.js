import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAplUu1rxeVBfIsjT2IbMVJ4RZ2KbEjV9E",
  authDomain: "abika-5486d.firebaseapp.com",
  projectId: "abika-5486d",
  storageBucket: "abika-5486d.appspot.com",
  messagingSenderId: "901299873488",
  appId: "1:901299873488:web:294cca3d63d3ed6b7ea0d5",
  measurementId: "G-8ZJGNH0L5P"
};


const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth()
export const db = getFirestore(app);
export const storage = getStorage(app);