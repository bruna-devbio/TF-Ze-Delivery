import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from './firebaseConfig';

const fs = firebase.initializeApp(firebaseConfig);
const db = fs.firestore();

export const loginPage = (email, password) => {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut();
  }
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
};

export const registerPage = (email, password) => {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut();
  }
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
};
