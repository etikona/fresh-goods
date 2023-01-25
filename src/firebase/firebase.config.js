// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1GzykMSjgC71yDl2sArVxnuESev_OHXo",
    authDomain: "fresh-goods.firebaseapp.com",
    projectId: "fresh-goods",
    storageBucket: "fresh-goods.appspot.com",
    messagingSenderId: "476207329787",
    appId: "1:476207329787:web:bc5feb56326f89a0005b5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;