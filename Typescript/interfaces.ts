(() => {
    //interfaces crear un objeto y su tipado con diferentes propiedad

    interface Xmen {
        nombre: string,
        edad: number,
        poder?: string
    }

    const enviarMision = (xmen: Xmen) => {
        console.log(`Enviado a ${ xmen.nombre } a la mision`)
    }

    const regresarAlCUartel = ( xmen: Xmen ) => {
        console.log(`Regresando a ${xmen.nombre} de la mision`)
    }


    const wolverine: Xmen = {
        nombre: 'Logan',
        edad: 60,

    }
    const storm: Xmen = {
        nombre: 'Anguelique',
        edad: 100,

    }

    enviarMision(wolverine)
    regresarAlCUartel(storm)

})();






