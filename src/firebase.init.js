// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAam_4HMKziMjiEn0KpMO-N5Yi4bnT_ZX8",
  authDomain: "genius-car-services-79955.firebaseapp.com",
  projectId: "genius-car-services-79955",
  storageBucket: "genius-car-services-79955.appspot.com",
  messagingSenderId: "465168894075",
  appId: "1:465168894075:web:27b8d9afce484b237e7ade"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
