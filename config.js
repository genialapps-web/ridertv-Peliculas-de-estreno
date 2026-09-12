/* ============================================================
   CONFIGURACIÓN COMPARTIDA — RIDER TV
   Este archivo lo usan tanto index.html como admin.html.
   ============================================================ */

const firebaseConfig = {
  apiKey: "AIzaSyCBZki64bsD7E7eCx19EAFPjlpDvngUf7o",
  authDomain: "rider-tv.firebaseapp.com",
  projectId: "rider-tv",
  storageBucket: "rider-tv.firebasestorage.app",
  messagingSenderId: "170739641097",
  appId: "1:170739641097:web:7bda16abe08ff26516c1d8",
  measurementId: "G-8WW2ZBC9DY"
};

const IMGBB_API_KEY = "7be05fd20df981386917bd48040cbe78";
const ADMIN_PASSWORD = "riderTV2024"; // <-- Cambia esta contraseña
const COLLECTION_NAME = "catalogo";

// Inicializa Firebase solo si el SDK ya está cargado (evita "firebase is not defined")
if (typeof firebase === "undefined") {
  console.error("El SDK de Firebase no se cargó. Revisa tu conexión a internet o si algún bloqueador de anuncios/extensión está bloqueando gstatic.com o cdnjs.cloudflare.com.");
} else {
  firebase.initializeApp(firebaseConfig);
}

const db = (typeof firebase !== "undefined") ? firebase.firestore() : null;
