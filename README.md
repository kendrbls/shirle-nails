# Shirle Nails Studio — sitio web

Sitio de una sola página (HTML/CSS/JS puro, sin frameworks), con un diseño
minimalista tipo boutique de lujo: tonos crema, mucho espacio en blanco,
tipografía serif elegante. Listo para publicar gratis en GitHub Pages.

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

Mientras no agregues fotos, esas zonas se ven en un crema levemente más
oscuro que el fondo (no como una imagen rota).

- **Foto de portada** (debajo del hero): guardala como
  `assets/img/hero-placeholder.jpg` (formato panorámico, 16:9).
- **Tu foto de perfil** (sección "Sobre mí"): guardala como
  `assets/img/perfil-placeholder.jpg` (foto vertical, se recorta 4:5).
- **Galería:** guardá tus fotos de trabajos como `trabajo-01.jpg`,
  `trabajo-02.jpg`, etc. dentro de `assets/gallery/` (fotos cuadradas se ven
  mejor). Podés agregar más recuadros copiando este bloque dentro de
  `<div class="gallery__grid">` en `index.html`:

  ```html
  <figure class="gallery__item"><div class="gallery__ph" style="background-image:url('assets/gallery/trabajo-07.jpg')"></div></figure>
  ```

## 2. Datos de contacto (revisar antes de publicar)

En `index.html`, dentro de `<footer class="contact" id="contacto">`:

- Cambiá el número de WhatsApp en `href="https://wa.me/50600000000"` por el
  número real, formato `506XXXXXXXX` (código de país + número, sin espacios
  ni guiones).
- Cambiá `https://instagram.com/shirlenailsstudio` por el usuario real de
  Instagram (o quitá ese botón si no se usa esa red).

## 3. Dirección y mapa

Se edita en **un solo lugar**, en `js/script.js`:

```js
const DIRECCION = "50 metros este del parque central, contiguo a Farmacia Saba, Costa Rica";
```

Cambiala por la dirección completa (con el cantón o ciudad, si se quiere más
precisión) y el mapa y el botón "Ver en Google Maps" se actualizan solos.

## 4. Precios

Los precios y servicios están en `<section class="services"...>` de
`index.html`, dentro de tarjetas `<article class="price-card">`. Solo hay que
cambiar el texto o el número (`price-card__amount`) si algo cambia.

## 5. Publicar gratis en GitHub Pages

1. Creá una cuenta en [github.com](https://github.com) si no tenés.
2. Creá un repositorio nuevo, por ejemplo `shirle-nails-studio` (puede ser
   público).
3. Subí **todo el contenido** de esta carpeta (`index.html`, `css/`, `js/`,
   `assets/`, `.nojekyll`) al repositorio: "Add file" → "Upload files",
   arrastrando los archivos — no hace falta terminal.
4. Andá a **Settings → Pages**.
5. En "Branch", elegí `main` y la carpeta `/ (root)`, y guardá.
6. En unos minutos el sitio va a estar en:
   `https://TU-USUARIO.github.io/shirle-nails-studio/`

Si al subirlo lo ves desordenado, casi siempre es porque falta algún archivo
(por ejemplo la carpeta `css` o `js` completa) o porque `index.html` no quedó
en la raíz del repositorio, sino dentro de una subcarpeta. Verificá que en la
página principal del repo se vean directamente `index.html`, `css`, `js` y
`assets` — no una carpeta `shirle-nails` que los contenga.

## Notas de diseño

- Tipografías: *Cormorant Garamond* (títulos y precios) y *Jost* (menú,
  botones, texto de cuerpo) — se cargan desde Google Fonts.
- Paleta: solo tonos crema y marfil de fondo, con texto en un café-negro
  suave y detalles en gris cálido (taupe); sin dorado ni negro sólido.
- Los precios se muestran en tarjetas simples tipo boutique (línea punteada
  + monto), sin íconos ni pastillas de color, para un look limpio y
  minimalista.
