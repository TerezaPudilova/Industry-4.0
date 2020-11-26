import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDJKbcn2vhNmi41k0kwvduMA-HkOsiIOQ8",
  authDomain: "dotaznik-industry4-0.firebaseapp.com",
  databaseURL: "https://dotaznik-industry4-0.firebaseio.com",
  projectId: "dotaznik-industry4-0",
  storageBucket: "dotaznik-industry4-0.appspot.com",
  messagingSenderId: "117721149357",
  appId: "1:117721149357:web:2af0d7a327378d2e0c3b24",
  measurementId: "G-7TR0ZDXF3M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db=firebase.firestore();