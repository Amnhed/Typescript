"use strict";
(() => {
    //interfaces crear un objeto y su tipado con diferentes propiedad
    const enviarMision = (xmen) => {
        console.log(`Enviado a ${xmen.nombre} a la mision`);
    };
    const regresarAlCUartel = (xmen) => {
        console.log(`Regresando a ${xmen.nombre} de la mision`);
    };
    const wolverine = {
        nombre: 'Logan',
        edad: 60,
    };
    const storm = {
        nombre: 'Anguelique',
        edad: 100,
    };
    enviarMision(wolverine);
    regresarAlCUartel(storm);
})();
