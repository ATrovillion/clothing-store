import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {

  apiKey: 'AIzaSyDiJr5Pjg6fcj8GnnWaLpw3US1ig19K17M',

  authDomain: 'clothing-store-90146.firebaseapp.com',

  projectId: 'clothing-store-90146',

  storageBucket: 'clothing-store-90146.appspot.com',

  messagingSenderId: '63191848271',

  appId: '1:63191848271:web:652d33d4c6d1a45dad213a'

};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot);
  console.log(userSnapshot.exists());
};
