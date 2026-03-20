import './style.css'

// 1. Definimos tus productos (Bolsos)
const bolsos = [
  {
    nombre: "Bōso en Cuero Grande",
    precio: "20.00",
    imagen: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=500",
    link: "https://wa.me/584120000000?text=Hola!+Me+interesa+el+Tote+Minimalista"
  },
  {
    nombre: "Clutch Gala Noir",
    precio: "85.00",
    imagen: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=500",
    link: "https://wa.me/584120000000?text=Hola!+Me+interesa+el+Clutch+Gala"
  },
  {
    nombre: "Bandolera Urban",
    precio: "95.00",
    imagen: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=500",
    link: "https://wa.me/584120000000?text=Hola!+Me+interesa+la+Bandolera+Urban"
  }
];

// 2. Inyectamos el contenido en el div #app
document.querySelector('#app').innerHTML = `
  <section class="catalogo-container">
    <div class="grid-bolsos">
      ${bolsos.map(bolso => `
        <div class="card-bolso">
          <img src="${bolso.imagen}" alt="${bolso.nombre}" loading="lazy">
          <div class="info">
            <h3>${bolso.nombre}</h3>
            <p class="precio">$${bolso.precio}</p>
            <a href="${bolso.link}" target="_blank" class="btn-pedido">
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      `).join('')}
    </div>
  </section>
`