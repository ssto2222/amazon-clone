import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLMwDaI-BMjpx5pt-U3fhgJxcSUd1NwnE",
  authDomain: "clone-7bdc3.firebaseapp.com",
  projectId: "clone-7bdc3",
  storageBucket: "clone-7bdc3.appspot.com",
  messagingSenderId: "432769716115",
  appId: "1:432769716115:web:b98d59f502b882282d2266",
  measurementId: "G-QH22MQ70GV",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default { db };
