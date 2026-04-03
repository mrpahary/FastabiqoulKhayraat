import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDummyKeyForTesting123456789',
  authDomain: 'fastabiqoulkhayraat.firebaseapp.com',
  projectId: 'fastabiqoulkhayraat',
  storageBucket: 'fastabiqoulkhayraat.appspot.com',
  messagingSenderId: '123456789',
  appId: '1:123456789:web:abcdef123456'
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
export default app;