// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectAuth=firebase.auth();
export {projectAuth,onAuthStateChanged};
