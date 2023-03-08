import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  doc,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  orderBy,
  query,
} from 'firebase/firestore';
import { auth, db } from '../firebaseconf';
import { showTime } from '../setDate';

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
    Time: showTime(),
    Likes: [],
  });
};

export const q = query(collection(db, 'Posts'), orderBy('Time', 'desc'));

export const deletePost = (idPost) => deleteDoc(doc(db, 'Posts', idPost));

export const editPost = (editing, idPost) => updateDoc(doc(db, 'Posts', idPost), {
  Descripcion: editing,
});
