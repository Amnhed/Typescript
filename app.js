"use strict";
(() => {
    const sumar = (a, b) => a + b;
    const nombre = () => 'Hola Mundo';
    const obtenerSalario = (salario) => {
        return new Promise((resolve, rejected) => {
            resolve('300');
        });
    };
    obtenerSalario(300).then(a => console.log(a.toUpperCase()));
})();
