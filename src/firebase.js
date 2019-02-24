import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAJ5fWAG6oxKktlQdIx6B8OwOVtHfmwknM",
  authDomain: "fire-blog-ebed2.firebaseapp.com",
  databaseURL: "https://fire-blog-ebed2.firebaseio.com",
  projectId: "fire-blog-ebed2",
  storageBucket: "fire-blog-ebed2.appspot.com",
  messagingSenderId: "316393063969"
};
firebase.initializeApp(config);

const firestore = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { firebase, firestore, auth, provider };
