import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtKMuWErtia_YrFResnzIAoe0OwNBJ7e4",
  authDomain: "qmoney-tracker.firebaseapp.com",
  projectId: "qmoney-tracker",
  storageBucket: "qmoney-tracker.appspot.com",
  messagingSenderId: "569542886110",
  appId: "1:569542886110:web:7373ed00b26a4b9f60b84f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth()

const timestamp = firebase.firestore.Timestamp

export { db, auth, timestamp };
