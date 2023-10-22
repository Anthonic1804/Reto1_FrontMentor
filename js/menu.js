const hamburguerIcon = document.querySelector('.nav__hamburger');

hamburguerIcon.addEventListener('click', ()=>{
    hamburguerIcon.classList.toggle('nav__hamburger--open');
});