(function(){
    // funciones y parametros opcionales
    // se deben ordenar
    //1 parametros obligatorios
    //2 opcionales con ?:
    //3 valor por defecto
    function activar ( quien : string,
        momento?: string,
        objeto: string = 'batiseñal'
        ){
            if(momento){
                console.log(`${ quien } activo la ${ objeto } en la ${ momento }`)
            }else{
                console.log(`${ quien } activo la ${ objeto }`)
            }

    }
    activar('gordon')



})();






