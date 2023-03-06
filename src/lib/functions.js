import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  doc,
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  orderBy,
  query,
} from 'firebase/firestore';
import { auth, db } from '../firebaseconf';

const provider = new GoogleAuthProvider();

export const googleLogIn = () => signInWithPopup(auth, provider);
// eslint-disable-next-line max-len
export const createAccount = (mail, password) => createUserWithEmailAndPassword(auth, mail, password);

export const logAcc = (mail, password) => signInWithEmailAndPassword(auth, mail, password);

export const exit = () => signOut(auth);

export const addPost = (text) => {
  const user = auth.currentUser;
  return addDoc(collection(db, 'Posts'), {
    User: user.uid,
    Descripcion: text,
    Time: new Date(),
  });
};

export const q = query(collection(db, 'Posts'), orderBy('Time', 'desc'));
export const querySnapshot = () => getDocs(q);

export const deletePost = (idPost) => deleteDoc(doc(db, 'Posts', idPost));
