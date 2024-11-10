import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDJjDuDyY_treuynj2ehzBGjJBS_lnzYO4",
    authDomain: "subscriptions-62d87.firebaseapp.com",
    projectId: "subscriptions-62d87",
    storageBucket: "subscriptions-62d87.firebasestorage.app",
    messagingSenderId: "758310027825",
    appId: "1:758310027825:web:9f6b7a4455b2cc8605cb10"
};

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();