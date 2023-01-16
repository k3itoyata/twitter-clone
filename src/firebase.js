// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcFOx4jWUkWKAfdayrPSBaHbevAHWrTDM",
    authDomain: "twitter-clone-dc1e1.firebaseapp.com",
    projectId: "twitter-clone-dc1e1",
    storageBucket: "twitter-clone-dc1e1.appspot.com",
    messagingSenderId: "953270825781",
    appId: "1:953270825781:web:260ff8031450df3bcd127c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;