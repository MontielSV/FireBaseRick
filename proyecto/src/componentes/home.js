import mostrarLogout from "./logout.js";

export default async function mostrarHome() {
  const appContainer = document.getElementById("app");
  appContainer.innerHTML = "<h2>Cargando personajes...</h2>";

  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    const personajes = data.results;

    appContainer.innerHTML = "";

    personajes.forEach((personaje) => {
      const card = document.createElement("div");
      card.classList.add("app-card");
      card.innerHTML = `
        <img src="${personaje.image}" alt="${personaje.name}">
        <div class="app-info">
          <h2>${personaje.name}</h2>
          <p><strong>Estado:</strong> ${personaje.status}</p>
          <p><strong>Especie:</strong> ${personaje.species}</p>
          <p><strong>Origen:</strong> ${personaje.origin.name}</p>
        </div>
      `;
      appContainer.appendChild(card);
    });

    // Botón de logout
    const btnLogout = document.createElement("button");
    btnLogout.textContent = "Cerrar sesión";
    btnLogout.onclick = () => mostrarLogout();
    appContainer.appendChild(btnLogout);

  } catch (error) {
    console.error("Error al cargar los datos:", error);
    appContainer.innerHTML = "<p>Error al cargar los personajes 😢</p>";
  }
}
