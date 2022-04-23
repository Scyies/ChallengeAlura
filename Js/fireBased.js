// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYxucnxHmgCX4fPPDL1JFhCnXqVcSG4Cg",
  authDomain: "alurageek-test.firebaseapp.com",
  databaseURL: "https://alurageek-test-default-rtdb.firebaseio.com",
  projectId: "alurageek-test",
  storageBucket: "alurageek-test.appspot.com",
  messagingSenderId: "941261808244",
  appId: "1:941261808244:web:03e5598d3b729d8e986721",
  measurementId: "G-X5D53K656V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);