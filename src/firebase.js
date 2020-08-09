// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBlE2t56OKXinGi-IzWkvPqL__1DdeVlWA",
    authDomain: "dispatch-lspd.firebaseapp.com",
    databaseURL: "https://dispatch-lspd.firebaseio.com",
    projectId: "dispatch-lspd",
    storageBucket: "dispatch-lspd.appspot.com",
    messagingSenderId: "78229145698",
    appId: "1:78229145698:web:924b7ff783a3b80cfa293b"
};

firebase.initializeApp(firebaseConfig);