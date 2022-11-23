import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAplUu1rxeVBfIsjT2IbMVJ4RZ2KbEjV9E",
  authDomain: "abika-5486d.firebaseapp.com",
  projectId: "abika-5486d",
  storageBucket: "abika-5486d.appspot.com",
  messagingSenderId: "901299873488",
  appId: "1:901299873488:web:294cca3d63d3ed6b7ea0d5",
  measurementId: "G-8ZJGNH0L5P"
};


export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const db = getFirestore(app)
export const auth = getAuth(app)

export function reg(email, password) {
  createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  signOut(auth)
}

export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user =>  setCurrentUser(user))
    return unsub;
  }, []);

  return currentUser
}