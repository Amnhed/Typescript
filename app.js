"use strict";
(function () {
    //DESESTRUCTURACIONDE OBJETO
    //({ nombre, poder }: any)
    //DESESTRUTURACION DE ARREGLO
    //( [, , arana]: string[] )
    var avenger = {
        nombre: 'Steve',
        clave: 'Capitan steve',
        poder: 'Droga'
    };
    var extraer = function (_a) {
        var nombre = _a.nombre, poder = _a.poder;
        console.log(nombre);
        console.log(poder);
    };
    extraer(avenger);
    console.log('/////////DESESTRUCTURACION DE AREGLOS//////////');
    var avengers = ['Thor', 'Ironman', 'Spiderman'];
    var arana = avengers[2];
    console.log(arana);
    var extraerArr = function (_a) {
        var arana = _a[2];
        console.log(arana);
    };
})();
