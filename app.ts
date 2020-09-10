(function(){
    // cada vez que creo una nueva variable con let se crea un nuevo espacion en memoria dentro del scope

    let mensaje = 'Hola';

    if( true ) {

        let mensaje = 'Mundo';
        const URL= 'http'; //constante uppercase nunca cambiara su valor a lo largo del programa 
    }

    console.log( mensaje )
    //Hola

})();






