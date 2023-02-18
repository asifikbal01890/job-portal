// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwbevPZH30WuGVq2mPPa5LOkKf6Tb4YD0",
  authDomain: "job-portal-5bc96.firebaseapp.com",
  projectId: "job-portal-5bc96",
  storageBucket: "job-portal-5bc96.appspot.com",
  messagingSenderId: "806395696301",
  appId: "1:806395696301:web:28f786e35b02ab8d21a224",
  measurementId: "G-G9DE1E9JM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;