// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// // colocar las credencias propias a cada uno, 1er concepto que nos enseño...
// const firebaseConfig = {
//   apiKey: "AIzaSyDwHR_Gcv9QCiHRtFP5mmDnRcPghtMrODQ",
//   authDomain: "productos-utn.firebaseapp.com",
//   projectId: "productos-utn",
//   storageBucket: "productos-utn.firebasestorage.app",
//   messagingSenderId: "692029493149",
//   appId: "1:692029493149:web:ce135f7072d2997be46974"
// };

 // Leo's web app's Firebase configuration AGREGAMOS EL CONCEPTO DE VARIABLES DE ENTORNO. VER ARCHIVO .env
 const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }