(() => {
    // funion que se jecuta en las clases o en otro lado
    // expande la funcionalidad  

    function imprimirConsola(constructorClase: Function){
        console.log( constructorClase )
    }
    
    @imprimirConsola
    class Xmen {

        constructor (public nombre: string,
                     public clave: string,
                    ){ }
        imprimir() {
            console.log(`${ this.nombre } - ${ this.clave }`)
        }
    }

    const wolverine = new Xmen('Logan', 'Wolverine')


})();






