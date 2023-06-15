
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAMYcFfuxwqO__aJGaq2_aU9SyQlPJLnKw",
  authDomain: "gemgardenlogin.firebaseapp.com",
  projectId: "gemgardenlogin",
  storageBucket: "gemgardenlogin.appspot.com",
  messagingSenderId: "5481704443",
  appId: "1:5481704443:web:8b122f3e21dc28afe0b95e",
  measurementId: "G-KFVE4B4VL5"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app,auth}