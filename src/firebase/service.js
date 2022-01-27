import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyCsG6vCnqVx5jLnDRIc43VKDhWbuEiWZX8",
  authDomain: "doctor-appointment-1e11b.firebaseapp.com",
  projectId: "doctor-appointment-1e11b",
  storageBucket: "doctor-appointment-1e11b.appspot.com",
  messagingSenderId: "286180250928",
  appId: "1:286180250928:web:441fccdb2a4d0a0a5be4f5",
  measurementId: "G-S63CTQFR5X"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;