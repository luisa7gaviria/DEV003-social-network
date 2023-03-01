import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDntsZlb1-5rAHsVZzixD2JNvBGYQ8XCU8',
  authDomain: 'social-network-ggamers.firebaseapp.com',
  projectId: 'social-network-ggamers',
  storageBucket: 'social-network-ggamers.appspot.com',
  messagingSenderId: '944143344949',
  appId: '1:944143344949:web:1f5082b09d62698cd4d87c',
  measurementId: 'G-Z9XHW3079R',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const fs = getFirestore(firebaseApp);
