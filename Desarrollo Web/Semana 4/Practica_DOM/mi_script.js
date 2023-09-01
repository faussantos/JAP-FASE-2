document.addEventListener('DOMContentLoaded', function () {

    let enlaces = document.getElementsByTagName("a");

    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces de la página :

        var resultado1 = "En la página hay " + enlaces.length + " enlaces - "

    // Incluye aquí el código necesario para mostrar en el párrafo "info", la dirección del penúltimo enlace de la página :

    for (let i = 0; i < enlaces.length; i++) {
        var resultado2 = "La dirección del penúltimo enlace de la página es: " + enlaces[i - 1] + " - "
    }

    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces que apuntan a http://prueba/ :

    var enlacesEspeciales = 0

    for (let i = 0; i < enlaces.length; i++) {
        if (enlaces[i].href === "http://prueba/"){
        enlacesEspeciales++
        }
    }
        var resultado3 = "El número de enlaces que apuntan a http://prueba/ son: " + enlacesEspeciales + " - "

    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces del tercer párrafo :

    let parrafos = document.getElementsByTagName("p");
    let enlacesTercerParrafo = parrafos[2].getElementsByTagName("a");

    var resultado4= "El número de enlaces del tercer párrafo es: " + enlacesTercerParrafo.length

    
    // Imprime todos los resultados en el párrafo con id "info"
    document.getElementById("info").innerHTML = resultado1 + " " + resultado2 + " " + resultado3 + resultado4
});