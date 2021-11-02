import firebase from "firebase/app";
import "firebase/auth";
// firebase config

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWxBlYoBw4BhEqxk40sgrn9DG5Ko6PU7s",
  authDomain: "e-commerce-95b5d.firebaseapp.com",
  projectId: "e-commerce-95b5d",
  storageBucket: "e-commerce-95b5d.appspot.com",
  messagingSenderId: "562138925075",
  appId: "1:562138925075:web:9d973647e9465a74f057e6",
};

// initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
// export
// export default firebase;
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
