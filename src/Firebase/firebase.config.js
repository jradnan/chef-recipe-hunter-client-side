// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6LYickWU2WSzv8JC5YODQ9Ktihf4HnJw",
  authDomain: "chef-recipe-hunting-assi-d3fea.firebaseapp.com",
  projectId: "chef-recipe-hunting-assi-d3fea",
  storageBucket: "chef-recipe-hunting-assi-d3fea.appspot.com",
  messagingSenderId: "397526390599",
  appId: "1:397526390599:web:b88c38022bc7836568de62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;