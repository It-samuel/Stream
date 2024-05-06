// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {FIREBASE_APIKEY, FIREBASE_API_ID} from 'expo-env';
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_APIKEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: PROJECT_ID ,
  storageBucket: STORAGE_BUCKET_ID,
  messagingSenderId: MESSEGING_SENDER_ID,
  appId: FIREBASE_API_ID
};

// Initialize Firebase
export const FIREBASE_AUTH = initializeApp(firebaseConfig);