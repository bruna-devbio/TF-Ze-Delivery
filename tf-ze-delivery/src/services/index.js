import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from './firebaseConfig';

const fs = firebase.initializeApp(firebaseConfig);
const db = fs.firestore();