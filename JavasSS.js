const tree = document.querySelector('.mainSVG');
const card = document.getElementById('card');
const closeButton = document.getElementById('closeButton');

// Mostrar la carta al hacer clic en el árbol
tree.addEventListener('click', () => {
    card.style.display = 'block';
});

// Cerrar la carta al hacer clic en el botón
closeButton.addEventListener('click', () => {
    card.style.display = 'none';
});
// JavaScript opcional para manipular el tamaño de la ventana si es necesario
function ajustarTamañoVentana() {
  const width = window.innerWidth;

  if (width < 600) {
    document.body.style.backgroundColor = '#f0f0f0';
  } else {
    document.body.style.backgroundColor = '#ffffff';
  }
}

// Llamar a la función cada vez que la ventana cambie de tamaño
window.addEventListener('resize', ajustarTamañoVentana);

// Llamar a la función cuando se cargue la página
window.onload = ajustarTamañoVentana;
