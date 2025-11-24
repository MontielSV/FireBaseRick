import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig.js";
import mostrarLogin from "./login.js";

export default function mostrarLogout() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h2>¿Seguro que quieres cerrar sesión?</h2>
    <button id="btnConfirmLogout">Cerrar sesión</button>
    <button id="btnCancelLogout">Cancelar</button>
  `;

  document.getElementById("btnConfirmLogout").addEventListener("click", async () => {
    try {
      await signOut(auth);
      alert("✅ Sesión cerrada correctamente");
      mostrarLogin(); // Regresa al login
    } catch (error) {
      alert("❌ Error al cerrar sesión: " + error.message);
    }
  });

  document.getElementById("btnCancelLogout").addEventListener("click", () => {
    // Si cancelas, puedes volver al home
    history.back(); // o mostrarHome();
  });
}
