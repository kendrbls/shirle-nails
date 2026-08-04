# Shirle Nails Studio — sitio web

Sitio de una sola página (HTML/CSS/JS puro, sin frameworks) listo para publicar
gratis en GitHub Pages.

## Estructura

```
shirle-nails/
├── index.html
├── css/style.css
├── js/script.js
└── assets/
    ├── img/            → foto de portada y foto de perfil
    └── gallery/         → fotos de trabajos para la galería
```

## 1. Poner tus propias fotos

Mientras no agregues fotos, esas zonas se ven en color crema/dorado (queda
elegante como marcador de posición), así que el sitio nunca se ve "roto".

- **Foto de portada:** guardá una foto vertical (recomendado 800×1000px o
  similar) como `assets/img/hero-placeholder.jpg`.
- **Tu foto de perfil** (sección "Sobre mí"): guardala como
  `assets/img/perfil-placeholder.jpg` (foto cuadrada, se recorta en círculo).
- **Galería:** guardá tus fotos de trabajos como `trabajo-01.jpg`,
  `trabajo-02.jpg`, etc. dentro de `assets/gallery/` (fotos cuadradas se ven
  mejor). Podés agregar más recuadros copiando este bloque dentro de
  `<div class="gallery__grid">` en `index.html`:

  ```html
  <figure class="gallery__item"><div class="gallery__ph" style="background-image:url('assets/gallery/trabajo-07.jpg')"></div></figure>
  ```

## 2. Datos de contacto (obligatorio revisar)

En `index.html`, dentro de la sección `<footer class="contact" id="contacto">`:

- Cambiá el número de WhatsApp en `href="https://wa.me/50600000000"` por el
  número real, formato `506XXXXXXXX` (código de país + número, sin espacios
  ni guiones).
- Cambiá `https://instagram.com/shirlenailsstudio` por tu usuario real de
  Instagram (o quitá ese botón si no usás esa red).

## 3. Dirección y mapa

La dirección se edita en **un solo lugar**, en `js/script.js`:

```js
const DIRECCION = "50 metros este del parque central, contiguo a Farmacia Saba, Costa Rica";
```

Cambiala por la dirección completa (idealmente con el nombre del cantón o
ciudad) y el mapa y el botón "Ver en Google Maps" se actualizan solos. Si
preferís usar coordenadas exactas de Google Maps, decímelo y te lo dejo así.

## 4. Precios

Los precios y servicios están en la sección `<section class="services"...>`
de `index.html`. Cada fila tiene su nombre y su precio (`price-pill`) — solo
hay que cambiar el texto o el número si algo cambia.

## 5. Publicar gratis en GitHub Pages

1. Creá una cuenta en [github.com](https://github.com) si no tenés una.
2. Creá un repositorio nuevo, por ejemplo `shirle-nails-studio` (puede ser
   público).
3. Subí todos los archivos de esta carpeta (`index.html`, `css/`, `js/`,
   `assets/`) a ese repositorio. Se puede hacer arrastrando los archivos
   desde la web de GitHub ("Add file" → "Upload files"), sin necesidad de
   usar la terminal.
4. Andá a **Settings → Pages** dentro del repositorio.
5. En "Branch", elegí `main` y la carpeta `/ (root)`, y guardá.
6. En unos minutos tu sitio va a estar disponible en:
   `https://TU-USUARIO.github.io/shirle-nails-studio/`

Cada vez que subas un cambio (una foto nueva, un precio actualizado), el
sitio se actualiza solo en un par de minutos.

## Notas de diseño

- Tipografías: *Playfair Display* (títulos), *Petit Formal Script* (firma
  "Shirle"), *Jost* (textos y menú) — se cargan desde Google Fonts.
- Paleta: crema/marfil de fondo, negro para contraste y texto, dorado como
  color de acento — en línea con la estética del poster de precios original.
- Los íconos de la lista de precios (esmalte, rubber base, estructura,
  pedicure, relleno, retiro) están dibujados a mano en SVG dentro de
  `index.html`, no son imágenes, así que se ven nítidos en cualquier tamaño
  de pantalla.
