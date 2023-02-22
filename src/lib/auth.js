import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseconf';

const provider = new GoogleAuthProvider();

export const googleLogIn = () => signInWithPopup(auth, provider);
export const createAccount = (mail, password) => {
  createUserWithEmailAndPassword(auth, mail, password);
};
