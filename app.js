"use strict";
(function () {
    // funciones flecha
    // asignamos una funcion a una constante para no sobreescribir la funcion
    // Las funciones no modificacn el escope al entener una funcion 
    // dentro de otra funcion
    // const hulk = {
    //     nombre: 'Hulk',
    //     smash() {
    //         setTimeout( function() {
    //setTimeout( () => {
    //             console.log(`${ this.nombre } smash!! `);
    //         }, 1000 );
    //     }
    // }
    var miFuncion = function (a) {
        return a.toUpperCase();
    };
    var miFuncionF = function (a) { return a.toUpperCase(); };
    var sumarN = function (a, b) {
        return a + b;
    };
    //console.log(sumarNum(12,13));
    var sumarNum = function (a, b) { return a + b; };
    var hulk = {
        nombre: 'Hulk',
        smash: function () {
            var _this = this;
            setTimeout(function () {
                console.log(_this.nombre + " smash!! ");
            }, 1000);
        }
    };
    hulk.smash();
})();
