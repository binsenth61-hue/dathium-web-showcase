# Dathium Web Showcase

Showcase interactivo y multirubro para el servicio de desarrollo web de Dathium.

## Incluye

- Hero tecnológico y responsive.
- Showcase por rubros: Empresas, E-commerce, Turismo, Servicios, Hoteles y Restaurantes.
- Cambio manual y por scroll en escritorio.
- Sección de capacidades y proceso.
- GSAP + ScrollTrigger desde CDN.
- CSS y JavaScript externos para mantener limpio el constructor web.
- Fondo transparente: utiliza el fondo existente de la página de Dathium.
- Full bleed: el componente intenta ocupar todo el ancho aunque el constructor lo inserte dentro de un contenedor.

## Estructura

```text
Dathium-web-showcase/
├── index.html
├── embed-snippet.html
├── README.md
└── assets/
    ├── dathium-web.css
    └── dathium-web.js
```

## Probar localmente

Abre `index.html` en el navegador. El demo aplica `#09101f` al `body` solo para visualizar el componente. El CSS del componente en sí no pinta un fondo general.

## Publicar en GitHub + jsDelivr

1. Crea un repositorio público, por ejemplo `dathium-web-showcase`.
2. Sube todos estos archivos manteniendo la estructura.
3. En tu página carga:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/TU_USUARIO/dathium-web-showcase@main/assets/dathium-web.css">
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/TU_USUARIO/dathium-web-showcase@main/assets/dathium-web.js"></script>
```

Entre el CSS y los scripts pega únicamente `<section id="dathium-web-showcase">...</section>` de `index.html`.

## Producción

Cuando termines de ajustar el diseño, conviene publicar una versión/tag (`v1.0.0`) y reemplazar `@main` por `@v1.0.0`. Así los cambios futuros del repositorio no modifican accidentalmente la web publicada.

Ejemplo:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/TU_USUARIO/dathium-web-showcase@v1.0.0/assets/dathium-web.css">
```

## WhatsApp

Los CTA actuales usan `932274344`. Puedes buscar ese número en `index.html` si necesitas cambiarlo.

## Nota sobre el fondo

`#dathium-web-showcase` tiene `background: transparent`. El color `#09101f` del demo se configura únicamente en `index.html` sobre `html/body`, por lo que al incrustarlo en tu web toma el fondo existente.
