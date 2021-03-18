/* Scripts Libreria Scroll Reveal */
/* Para saber más revisar documentación oficial de la libreria => https://scrollrevealjs.org/guide/installation.html */

//Método para disparar efecto a toda la página.
ScrollReveal({
    duration: 1500
})

//Aplicar reglas a ciertos elementos.
ScrollReveal().reveal(".reveal-container", {
    delay: 80
});
ScrollReveal().reveal(".tech-items", {
    interval: 80
});
ScrollReveal().reveal("#img-header", {
    delay: 80
});

ScrollReveal().reveal(".reveal-home", {
    delay: 3000
});