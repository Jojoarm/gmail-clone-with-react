import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVIaVzuHER4iK27WyOZSOqdJdtGPLHoio",
    authDomain: "clone-396c3.firebaseapp.com",
    projectId: "clone-396c3",
    storageBucket: "clone-396c3.appspot.com",
    messagingSenderId: "388267558635",
    appId: "1:388267558635:web:3daef957fb70790f33a0ae",
    measurementId: "G-5D0HEH94ZW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };