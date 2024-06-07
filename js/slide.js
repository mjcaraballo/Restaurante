const fondo = document.getElementById('deslizar');
const flechaIzquierda = document.getElementById('flechaIzquierda');
const flechaDerecha = document.getElementById('flechaDerecha');
const fotos = [   './imagenes/imagenesmenu/pintxoPote.jpg', 
                  './imagenes/imagenesmenu/hamburguesaCasa.jpg',
                  './imagenes/imagenesmenu/parrilladaCasa.jpg',                  
                  ]; // Rutas de las imágenes

let currentIndex = 0;

const cambiarFondo = () => {
  catalogo.style.backgroundImage = `url('${fotos[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % fotos.length;
};

const cambiarFondoAnterior = () => {
  currentIndex = (currentIndex - 1 + fotos.length) % fotos.length;
  catalogo.style.backgroundImage = `url('${fotos[currentIndex]}')`;
};

// Cambiar fondo cada 5 segundos
const intervalo = setInterval(cambiarFondo, 5000);

// Cambiar fondo inicialmente
cambiarFondo();

// Cambiar fondo al hacer clic en flecha derecha
flechaDerecha.addEventListener('click', () => {
  clearInterval(intervalo);
  cambiarFondo();
});

// Cambiar fondo al hacer clic en flecha izquierda
flechaIzquierda.addEventListener('click', () => {
  clearInterval(intervalo);
  cambiarFondoAnterior();
});