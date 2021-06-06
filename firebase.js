import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCQsBsQR9w0bIyID-NWswos2BJXCAB3VyU",
    authDomain: "signal-clone-3d5bc.firebaseapp.com",
    projectId: "signal-clone-3d5bc",
    storageBucket: "signal-clone-3d5bc.appspot.com",
    messagingSenderId: "437625664397",
    appId: "1:437625664397:web:3f886f51591b4e470a43c4"
  };

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth }