import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAapgg7-nPUrljZg8ou-QvNb6kJyQ_DnAE",
  authDomain: "clone-91b49.firebaseapp.com",
  databaseURL: "https://clone-91b49.firebaseio.com",
  projectId: "clone-91b49",
  storageBucket: "clone-91b49.appspot.com",
  messagingSenderId: "1072489662873",
  appId: "1:1072489662873:web:8b33f3a85043033b3fab08",
  measurementId: "G-586EJ5B9VR",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
