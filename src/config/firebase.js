import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBlYlXLUIn7OZu4Cmes9ZDAhalZ7ZJHTJY",
  authDomain: "baby-share-601e5.firebaseapp.com",
  databaseURL: "https://baby-share-601e5.firebaseio.com",
  projectId: "baby-share-601e5",
  storageBucket: "baby-share-601e5.appspot.com",
  messagingSenderId: "700609856996",
  appId: "1:700609856996:web:292f267ed268606029b3f1",
  measurementId: "G-FR69BSXMV3"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
