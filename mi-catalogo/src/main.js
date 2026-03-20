import './style.css'
import fotoBolsoGrande from './assets/BolsoGrande.jpeg'
import fotoBolsoPequeno from './assets/bolso_pequeno.jpeg'

import fotocatalogo from './assets/catalogo.jpeg'
import Productos from './assets/Productos.jpeg'


// 1. Definimos tus productos (Bolsos)
const bolsos = [
  {
    nombre: "Bōso en Cuero Grande",
    precio: "20.00",
    imagen: fotoBolsoGrande, // <--- Usas la variable que importaste
    link: "https://wa.me/584129894936?text=Hola!+Me+interesa+obtener+mas+informacion+acerca+de+los+productos+que+vende!!"
  },
  {
   nombre: "Bōso en Cuero Pequeño",
    precio: "15.00",
    imagen: fotoBolsoPequeno,
    link: "https://wa.me/584129894936?text=Hola!+Me+interesa+obtener+mas+informacion+acerca+de+los+productos+que+vende!!"
  },
  {
    nombre: "Catalogo Completo Bōso",
    precio: "6.00 a 20.00",
    imagen: fotocatalogo, // <--- Usas la variable que importaste
    link: "https://wa.me/584129894936?text=Hola!+Me+interesa+obtener+mas+informacion+acerca+de+los+productos+que+vende!!"
  },
  {
    nombre: "Productos Bōso",
    precio: "12.00",
    imagen: Productos, // <--- Usas la variable que importaste
    link: "https://wa.me/584129894936?text=Hola!+Me+interesa+obtener+mas+informacion+acerca+de+los+productos+que+vende!!"
  },
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