import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB4mnZ3drSEgv8svNrcNyVHmuFbT8Qy5Cc",
    authDomain: "razerstore-fb.firebaseapp.com",
    projectId: "razerstore-fb",
    storageBucket: "razerstore-fb.firebasestorage.app",
    messagingSenderId: "349210388966",
    appId: "1:349210388966:web:1b8c6e4634d96ed4c74e27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db