// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAH9jGA4do4znUjD_y6DbuXP3uFusaJVtQ",
    authDomain: "delivery-hobe-clone-70db7.firebaseapp.com",
    projectId: "delivery-hobe-clone-70db7",
    storageBucket: "delivery-hobe-clone-70db7.appspot.com",
    messagingSenderId: "78148478853",
    appId: "1:78148478853:web:65fefee6be07680d8c46ec"
  };

firebase.initializeApp(firebaseConfig);

export var db = firebase.firestore();