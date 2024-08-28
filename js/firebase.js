"use strict";

const firebaseConfig = {
    apiKey: "AIzaSyAQrCunneI3G9cZQPN9SYVNDspiWA_QoAY",
    authDomain: "adms-29363.firebaseapp.com",
    projectId: "adms-29363",
    storageBucket: "adms-29363.appspot.com",
    messagingSenderId: "171196976376",
    appId: "1:171196976376:web:60be6094002c11035dff0d"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();

const auth = firebase.auth();

const db = firebase.firestore();

var database = firebase.database();
