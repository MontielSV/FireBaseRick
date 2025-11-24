import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC-3DdSlD6IXVYXak_J9AVrP9aj5wmxEEw",
  authDomain: "fir-rick-c489d.firebaseapp.com",
  projectId: "fir-rick-c489d",
  storageBucket: "fir-rick-c489d.firebasestorage.app",
  messagingSenderId: "351764900250",
  appId: "1:351764900250:web:0ac577837ea44bf68ff223"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar servicios
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
