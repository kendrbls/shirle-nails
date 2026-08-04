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
// --- Mapa: coordenadas exactas de Shirle Nails Studio en Google Maps ---
const LAT = 10.0544982;
const LNG = -84.4330419;
const MAPS_LINK = "https://maps.app.goo.gl/v41dDPr88mftPZ2Y7";

const mapFrame = document.getElementById('mapFrame');
const mapLink = document.getElementById('mapLink');

if (mapFrame) {
  mapFrame.src = `https://www.google.com/maps?q=${LAT},${LNG}&z=17&output=embed`;
}
if (mapLink) {
  mapLink.href = MAPS_LINK;
}
