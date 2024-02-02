import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgROaVNZ0ODuKs4Nu_eQzE4uJ1Xe1nyWA",
  authDomain: "testlab-8e47b.firebaseapp.com",
  projectId: "testlab-8e47b",
  storageBucket: "testlab-8e47b.appspot.com",
  messagingSenderId: "385423506520",
  appId: "1:385423506520:web:fe7e428ed268541cb85e2d"
};

// Initialize Firebase only if there aren't any initialized apps
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize services
export const firestore = getFirestore(app);
export const auth = getAuth(app);
