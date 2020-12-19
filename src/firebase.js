import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA2PsKJKweC6Z3iNI09OR7I3rbF4DWLtf0",
  authDomain: "clone-3c740.firebaseapp.com",
  projectId: "clone-3c740",
  storageBucket: "clone-3c740.appspot.com",
  messagingSenderId: "529263356257",
  appId: "1:529263356257:web:2cdcdae6b4914b96353d20",
  measurementId: "G-VK0W541GXX",
});

const db = firebase.firestore();

export default db;
