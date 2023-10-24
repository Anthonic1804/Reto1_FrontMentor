const hamburguerIcon = document.querySelector('.nav__hamburger');
const navOverlay = document.querySelector('.nav__overlay');
let currentDropdown = navOverlay;

hamburguerIcon.addEventListener('click', ()=>{
    hamburguerIcon.classList.toggle('nav__hamburger--open');

    navOverlay.classList.toggle('nav__overlay--show');
});

navOverlay.addEventListener('click', (e)=>{
    e.preventDefault();
    const currentElement = e.target;

    //console.log(e.target.classList.value);

    if(isActive(currentElement, 'nav__parent')){
        //console.log('Tengo un subMenu');
        const subMenu = currentElement.parentElement.children[1];
        //console.log(subMenu);

        if(window.innerWidth < 768){
            
            let height = (subMenu.clientHeight == 0)
                        ? subMenu.scrollHeight : 0;

            //console.log(subMenu.clientHeight);

            subMenu.style.height = `${height}px`
        }else{
            if(!isActive(subMenu, 'nav__inner--show')){
                closeDropdown(currentDropdown);
            }
            subMenu.classList.toggle('nav__inner--show');
            currentDropdown = subMenu;
        }


    }
});

function isActive(element, string){
    return element.classList.value.includes(string);
}

function closeDropdown(currentDropdown){
    if(isActive(currentDropdown, 'nav__inner--show')){
        currentDropdown.classList.remove('nav__inner--show');
    }
}


//FUNCION PARA QUE LOS ELEMENTO ABIERTOS DEL MENU SE
//CIERREN AL MOMENTO DE CAMBIAR LA RESOLUCION DEL NAVEGADOR.
window.addEventListener('resize', ()=>{
    closeDropdown();
    if(window.innerWidth > 768){
        const navInners = document.querySelectorAll('.nav__inner');

        navInners.forEach(navInner => {
            navInner.style.height = '';
        });
    }
});

