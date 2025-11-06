// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getEnv } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: getEnv('VITE_FIREBASE_API'),
  authDomain: "mern-blog-f3d79.firebaseapp.com",
  projectId: "mern-blog-f3d79",
  storageBucket: "mern-blog-f3d79.firebasestorage.app",
  messagingSenderId: "876436042668",
  appId: "1:876436042668:web:823ee145e3e2929cf38009"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider}