// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// // colocar las credencias propias a cada uno
// const firebaseConfig = {
//   apiKey: "AIzaSyDwHR_Gcv9QCiHRtFP5mmDnRcPghtMrODQ",
//   authDomain: "productos-utn.firebaseapp.com",
//   projectId: "productos-utn",
//   storageBucket: "productos-utn.firebasestorage.app",
//   messagingSenderId: "692029493149",
//   appId: "1:692029493149:web:ce135f7072d2997be46974"
// };

 // Leo's web app's Firebase configuration
 const firebaseConfig = {
 apiKey: "AIzaSyD-h_JGLKERfKYqfqPctooZdwltRY4E3mA",
 authDomain: "productos-utn-76f8c.firebaseapp.com",
 projectId: "productos-utn-76f8c",
 storageBucket: "productos-utn-76f8c.firebasestorage.app",
 messagingSenderId: "681891639731",
 appId: "1:681891639731:web:124427be68307143eddbc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }