import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAMz6jEJCNTUdHR0gaVlOKLZWZQMgU1Nc0",
  authDomain: "devtinder-b4b07.firebaseapp.com",
  projectId: "devtinder-b4b07",
  storageBucket: "devtinder-b4b07.firebasestorage.app",
  messagingSenderId: "800344577785",
  appId: "1:800344577785:web:14716bd630bedf1af93428",
  measurementId: "G-7PBJ06DR1H",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
