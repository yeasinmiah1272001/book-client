// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp021rudBoauGVfoZ6ovW3hHD3why6PjI",
  authDomain: "book-store-f406c.firebaseapp.com",
  projectId: "book-store-f406c",
  storageBucket: "book-store-f406c.appspot.com",
  messagingSenderId: "284514627117",
  appId: "1:284514627117:web:d92a53aeadc471ea0d12a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
