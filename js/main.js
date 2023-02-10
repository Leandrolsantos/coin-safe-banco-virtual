const btnMobile = document.getElementById('btn-mobile');

function toogleMenu(event) {
const nav = document.getElementById('nav');
nav.classList.toggle('active');  
}

btnMobile.addEventListener('click', toggleMenu);