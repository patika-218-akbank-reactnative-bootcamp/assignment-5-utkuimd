import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvK2MabqJoK5I5lciHXeCnZanE0mNKxOg",
  authDomain: "spotify-clone-app-7cc1a.firebaseapp.com",
  projectId: "spotify-clone-app-7cc1a",
  storageBucket: "spotify-clone-app-7cc1a.appspot.com",
  messagingSenderId: "846756075896",
  appId: "1:846756075896:web:f9612b43e6e3f520b2108d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);