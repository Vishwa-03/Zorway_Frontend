// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC-22rhSh7xzSh2TzD96d1SYcgNkN8bXY",
  authDomain: "zorway-frontend.firebaseapp.com",
  projectId: "zorway-frontend",
  storageBucket: "zorway-frontend.appspot.com",
  messagingSenderId: "947895482602",
  appId: "1:947895482602:web:180798c36871cceaa4ff93"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectAuth=firebase.auth();
export {projectAuth,onAuthStateChanged};