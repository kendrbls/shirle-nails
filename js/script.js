// Shirle Nails Studio — script.js

// --- Menú móvil ---
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// --- Año en el footer ---
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// --- Mapa: arma el embed y el enlace a partir de una sola dirección ---
// Editá SOLO esta línea si la dirección cambia; se usa para el mapa y el botón "Ver en Google Maps".
const DIRECCION = "Shirle Nails Studio";

const mapFrame = document.getElementById('mapFrame');
const mapLink = document.getElementById('mapLink');
const query = encodeURIComponent(DIRECCION);

if (mapFrame) {
  mapFrame.src = `https://www.google.com/maps?q=${query}&output=embed`;
}
if (mapLink) {
  mapLink.href = `https://www.google.com/maps/search/?api=1&query=${query}`;
}
