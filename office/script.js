let one = document.querySelector('.sub_nav .sb ul');
let bg = document.querySelector('.sub_nav');
let mde = document.querySelector('header>nav>.media');
let mnu = document.querySelector('nav>.logo_nav>.nav>ul');

function dis(evt){

    [...one.children].forEach(el => {
        el.classList.remove('disp');
    });
    bg.className = 'sub_nav';
    bg.classList.add(evt.target.className);

    evt.target.classList.add('disp');

}

one.addEventListener('click',dis,false);
