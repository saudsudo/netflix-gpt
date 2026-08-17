// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhWaezbJoqKF6BKSxirfSZZIAlq70vx78",
  authDomain: "netflix-gpt-2c2df.firebaseapp.com",
  projectId: "netflix-gpt-2c2df",
  storageBucket: "netflix-gpt-2c2df.firebasestorage.app",
  messagingSenderId: "737038482157",
  appId: "1:737038482157:web:099ebe8bf3d8034f01aae4",
  measurementId: "G-86ZS3YP6QN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 getAnalytics(app);

export const auth = getAuth(app);