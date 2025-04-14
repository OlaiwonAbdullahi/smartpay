import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbYrpl-46QW32fejfVPSn0sNoCXXjsYnU",
  authDomain: "smartpay-71a07.firebaseapp.com",
  projectId: "smartpay-71a07",
  storageBucket: "smartpay-71a07.firebasestorage.app",
  messagingSenderId: "136494761289",
  appId: "1:136494761289:web:99ce27c4dce23e1a8ec698",
  measurementId: "G-7EL1BE58EF",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
