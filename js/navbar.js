const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', () => {
    nav.classList.add('visible');
});

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
});

document.addEventListener("click", (event) => {
    const clickedElement = event.target;

    if (!clickedElement.matches('.level')) {
        return;
    }
    nav.classList.remove('visible');
});