// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getFunctions} from 'firebase/functions';
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP1RaJqkdTaCVjjDe43b2_FLZEEDsauaU",
  authDomain: "aaaa-dev-ae7fe.firebaseapp.com",
  projectId: "aaaa-dev-ae7fe",
  storageBucket: "aaaa-dev-ae7fe.appspot.com",
  messagingSenderId: "674179322742",
  appId: "1:674179322742:web:964d84e957cc6e6aa76057",
  measurementId: "G-9F0K1WSDZ6"
};

//初期化してなければ初期化する(重複初期化のエラーをなくすため)
if(!getApps()?.length){
initializeApp(firebaseConfig);
}

export const db=getFirestore();
export const storage=getStorage();
export const auth=getAuth();
export const functions=getFunctions();