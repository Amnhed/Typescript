"use strict";
(function () {
    // cada vez que creo una nueva variable con let se crea un nuevo espacion en memoria dentro del scope
    var mensaje = 'Hola';
    if (true) {
        var mensaje_1 = 'Mundo';
        var URL_1 = 'http'; //constante uppercase nunca cambiara su valor a lo largo del programa 
    }
    console.log(mensaje);
    //Hola
})();
