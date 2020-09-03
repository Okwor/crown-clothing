import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBhBctakFW_gmlHA7YjcPKI_72oBnzHKc4",
    authDomain: "crwn-db-31eae.firebaseapp.com",
    databaseURL: "https://crwn-db-31eae.firebaseio.com",
    projectId: "crwn-db-31eae",
    storageBucket: "crwn-db-31eae.appspot.com",
    messagingSenderId: "327918241423",
    appId: "1:327918241423:web:03ea56c9dd1a23a43712fa",
    measurementId: "G-JP5GYVLFBZ"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;