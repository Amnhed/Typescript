"use strict";
(() => {
    console.log('inicio');
    const prom1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve('Se termino el timeout');
            reject('No se completo la promise');
        }, 1000);
    });
    prom1
        .then(mensaje => console.log(mensaje))
        .catch(err => console.warn(err));
    console.log('Fin');
})();
