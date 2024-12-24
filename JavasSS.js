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