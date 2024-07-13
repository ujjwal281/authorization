import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1eKrfnHYWwDoNDSDwPKwv1tybLycDeQQ",
  authDomain: "authorizaation.firebaseapp.com",
  projectId: "authorizaation",
  storageBucket: "authorizaation.appspot.com",
  messagingSenderId: "900147300866",
  appId: "1:900147300866:web:385887f790eee2ac8ef51b",
  measurementId: "G-CYTX98QSLC"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
