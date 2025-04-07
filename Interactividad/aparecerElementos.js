window.onscroll = function() {
    let contenedor1 = document.getElementById("cont1");
    let contenedor2 = document.getElementById("cont2");
    let contenedor3 = document.getElementById("cont3");

    if(window.scrollY > 75){
        contenedor1.style.opacity = 1;
    }
    else{
        contenedor1.style.opacity = 0;
    }

    if(window.scrollY > 125){
        contenedor2.style.opacity = 1;
    }
    else{
        contenedor2.style.opacity = 0;
    }

    if(window.scrollY > 200){
        contenedor3.style.opacity = 1;
    }
    else{
        contenedor3.style.opacity = 0;
    }

};

// para evitar repetir codigo

/*
window.onscroll = function() {
    let elementos = document.querySelectorAll(".contenedor");

    elementos.forEach((elemento, index) => {
        if (window.scrollY > (50 + index * 75)) { 
            elemento.style.opacity = 1;
            elemento.classList.add(`animar${index + 1}`);
        } else {
            elemento.style.opacity = 0;
            elemento.classList.remove(`animar${index + 1}`);
        }
    });
};

*/
