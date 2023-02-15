import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebaseconf';

const provider = new GoogleAuthProvider();

export const googleLogIn = () => signInWithPopup(auth, provider);
