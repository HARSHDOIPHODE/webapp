import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig={
  apiKey: "AIzaSyCo0_tvV06_CA-EhVQirwBwMZX9xbiXHDc",
  authDomain: "contact-2b949.firebaseapp.com",
  projectId: "contact-2b949",
  storageBucket: "contact-2b949.appspot.com",
  messagingSenderId: "942124249721",
  appId: "1:942124249721:web:0fff42aafa3c6a660a9aa8"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

var db = firebaseApp.firestore();

export { db };