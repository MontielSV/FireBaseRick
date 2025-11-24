import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig.js";

import mostrarRegistro from "./componentes/registro.js";
import mostrarLogin from "./componentes/login.js";
import mostrarHome from "./componentes/home.js";
import mostrarOriginal from "./componentes/original.js";
import mostrarLogout from "./componentes/logout.js";

// Control de sesión con Firebase
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Si hay usuario logueado → mostrar Home
    mostrarHome();
  } else {
    // Si no hay sesión → mostrar Login
    mostrarLogin();
  }
});

// mostrarRegistro();
// mostrarOriginal();
// mostrarLogout();
