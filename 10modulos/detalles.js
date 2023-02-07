//si quiero usar la funcion del factorial por ejemplo:
function factorial(a){
    //factorial de 5: 5*4*3*2*1
    let factorial=1
     for(let i=2; i<=a; i++){
        factorial *= i;

     }
     return factorial;
}
console.log(factorial(10))


//para no tener wur copar toda la funcion podemos con js modularizar el proyecto 
//un archivo centralizado donde estan todas las funciones y luego se llaman de los distintos archivos

