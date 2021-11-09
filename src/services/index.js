import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from './firebaseConfig';

const fs = firebase.initializeApp(firebaseConfig);
const db = fs.firestore();

const auth = getAuth();
signInWithEmailAndPassword(auth, values.email, values.password)
  .then((userCredential) => {
    console.log(userCredential);
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    console.log(error);
    const errorCode = error.code;
    const errorMessage = error.message;
  });