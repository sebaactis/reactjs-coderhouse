
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBMlKCLQ10t3l8-toezj1z3f9_Z8dBd-I8",
    authDomain: "react-hamburguepedia.firebaseapp.com",
    projectId: "react-hamburguepedia",
    storageBucket: "react-hamburguepedia.appspot.com",
    messagingSenderId: "728093774798",
    appId: "1:728093774798:web:127f1dbe1c9731a6a6919f"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const collectionProd = collection(db, "productos")
export const orderCollection = collection(db, "orders")