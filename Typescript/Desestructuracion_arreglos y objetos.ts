(() => {
    //DESESTRUCTURACIONDE OBJETO
    //({ nombre, poder }: any)
    //DESESTRUTURACION DE ARREGLO
    //( [, , arana]: string[] )
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan steve',
        poder: 'Droga'
    }
    const extraer = ({ nombre, poder }: any) => {
        console.log( nombre );
        console.log( poder );
    }

    extraer(avenger);
    console.log('/////////DESESTRUCTURACION DE AREGLOS//////////')
    const avengers: string[] = ['Thor','Ironman','Spiderman'];

    const [ , , arana] = avengers;

    console.log( arana );

    const extraerArr = ( [, , arana]: string[] ) => {
        console.log(arana)
    }



})();






