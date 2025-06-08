// firebase.js の例
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyABwFszhxv4IUP4gJiKfPsVpernfZsKkrI",
    authDomain: "react-firebase-app-43d22.firebaseapp.com",
    projectId: "react-firebase-app-43d22",
    storageBucket: "react-firebase-app-43d22.firebasestorage.app",
    messagingSenderId: "777404951146",
    appId: "1:777404951146:web:14c507bf12404f8970f813"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
