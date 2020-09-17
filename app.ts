(() => {
  const sumar = (a:number, b:number): number => a +b;

  const nombre = (): string => 'Hola Mundo';

  const obtenerSalario = (salario:number):Promise<string> =>{
      return new Promise( ( resolve, rejected ) =>{
        resolve('300')
      });
  }

  obtenerSalario(300).then( a => console.log(a.toUpperCase() )  )


})();






