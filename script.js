function mensaje(){

    alert("Bienvenido a la investigación sobre Economía y Política en México.");

}

/* Animaciones */

const secciones = document.querySelectorAll('.seccion');

window.addEventListener('scroll', () => {

    secciones.forEach(seccion => {

        const posicion = seccion.getBoundingClientRect().top;

        if(posicion < window.innerHeight - 100){

            seccion.style.opacity = "1";
            seccion.style.transform = "translateY(0px)";
        }

    });

});

secciones.forEach(seccion => {

    seccion.style.opacity = "0";
    seccion.style.transform = "translateY(50px)";
    seccion.style.transition = "all 1s";

});