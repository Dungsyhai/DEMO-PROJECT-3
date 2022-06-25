import firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCi0sDsQW9dlwjZ6dXifiNpLdT5HhRNTkI",
  authDomain: "fruit-shop-17-1.firebaseapp.com",
  projectId: "fruit-shop-17-1",
  storageBucket: "fruit-shop-17-1.appspot.com",
  messagingSenderId: "683469942303",
  appId: "1:683469942303:web:f780a53c4340039c68ef2a",
  measurementId: "G-J58X9Z0537"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }