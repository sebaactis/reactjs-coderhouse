
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.REACT_APP,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROYECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE,
    messagingSenderId: process.env.REACT_APP_MESSAGING,
    appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const collectionProd = collection(db, "productos")
export const orderCollection = collection(db, "orders")