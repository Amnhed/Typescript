(()=>{
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

    const miFuncion = function( a:string ) {
        return a.toUpperCase();
    }

    const miFuncionF = (a: string) => a.toUpperCase();

    const sumarN = function (a: number, b:number ) {
        return a + b;
    }
    //console.log(sumarNum(12,13));

    const sumarNum = (a:number, b:number) => a+b;

    const hulk = {
        nombre: 'Hulk',
        smash() {
            setTimeout( () => {
                console.log(`${ this.nombre } smash!! `);
            }, 1000 );
        }
    }

    hulk.smash();
 
    

})();






