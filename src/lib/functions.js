import {
  GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut,
} from 'firebase/auth';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../firebaseconf';

const provider = new GoogleAuthProvider();

export const googleLogIn = () => signInWithPopup(auth, provider);
// eslint-disable-next-line max-len
export const createAccount = (mail, password) => createUserWithEmailAndPassword(auth, mail, password);

export const logAcc = (mail, password) => signInWithEmailAndPassword(auth, mail, password);

export const exit = () => signOut(auth);

export const querySnapshot = () => getDocs(collection(db, 'Posts'));

export const addPost = (text) => addDoc(collection(db, 'Posts'), {
  Descripcion: text,
});

export const validateLog = () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('loged');
    } else {
      console.log('no esta logeado');
    }
  });
};
