// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBj2dfAYw_iebbUbwgzBpswh156YA0eKUM",
  authDomain: "proyectofinal-react-30682.firebaseapp.com",
  projectId: "proyectofinal-react-30682",
  storageBucket: "proyectofinal-react-30682.appspot.com",
  messagingSenderId: "756113512800",
  appId: "1:756113512800:web:2ba5802154917d28612605"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)