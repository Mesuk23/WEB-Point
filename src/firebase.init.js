// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyAdWKJuJharIhj3GSRG1N8lBPjXAK1_YeE",
    authDomain: "assignment-10-cdb34.firebaseapp.com",
    projectId: "assignment-10-cdb34",
    storageBucket: "assignment-10-cdb34.appspot.com",
    messagingSenderId: "274137942750",
    appId: "1:274137942750:web:238ee4cf37bb0fc02a504f"
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;