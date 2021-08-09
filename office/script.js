let nav = document.querySelectorAll('.sb>ul>li>span');
let snav = document.querySelectorAll('.sub_nav>.sub>ul');
let bg = document.querySelector('header .sub_nav');

function show(evt) {


    
    [...snav].forEach(ell => {

        ell.className = "";
    
    });  
    
    [...nav].forEach(ele => {

        ele.parentNode.className = "";

    });
    
    bg.classList.remove("one");
    bg.classList.remove("two");
    bg.classList.remove("three");

    if(evt.target.className === "one"){

        snav[0].classList.add('one');
        nav[0].parentNode.classList.add('one');
        bg.classList.add('one');

    }

    if(evt.target.className === "two"){

        snav[1].classList.add('two');
        nav[1].parentNode.classList.add('two');
        bg.classList.add('two');

    }

    if(evt.target.className === "three"){

        snav[2].classList.add('three');
        nav[2].parentNode.classList.add('three');
        bg.classList.add('three');
        
    }


}


[...nav].forEach(el => {

    el.addEventListener('mouseover',show,false);

});