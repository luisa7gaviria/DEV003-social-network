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
  arrayUnion,
  arrayRemove,
  getDoc,
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
  if (user.displayName === null || undefined) {
    user.displayName = 'Gamer Anónimo';
  }
  return addDoc(collection(db, 'Posts'), {
    Name: user.displayName,
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

const sumLike = (idPost, userId) => updateDoc(doc(db, 'Posts', idPost), {
  Likes: arrayUnion(userId),
});

const removeLike = (idPost, userId) => updateDoc(doc(db, 'Posts', idPost), {
  Likes: arrayRemove(userId),
});

export const askUserLike = async (theUser, thePost) => {
  const docRef = doc(db, 'Posts', thePost);
  const gettingDoc = await getDoc(docRef);
  const likesArr = gettingDoc.data().Likes;

  if (likesArr.includes(theUser)) {
    removeLike(thePost, theUser);
  } else {
    sumLike(thePost, theUser);
  }
};
