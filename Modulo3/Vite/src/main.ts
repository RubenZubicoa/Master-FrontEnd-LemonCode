import "./styles.css";

const env = import.meta.env.VITE_ENVIRONMENT;
const number = 10;

function add(a: number, b: number): number {
    return a + b;
}

// Crear <h1> con la API del DOM y estilos con CSS Modules
const app = document.getElementById("app");
if (app) {
    const h1 = document.createElement("h1");
    h1.textContent = env;
    h1.className = "title";
    app.appendChild(h1);
}
