export function suma(a,b){
    return a+b
}
function multiplica(a,b){
     return a*b
}
export function eleva(a,b){
     return a**b
}
export function factorial(a){
    //factorial de 5: 5*4*3*2*1
    let factorial=1
     for(let i=2; i<=a; i++){
        factorial *= i;

     }
     return factorial;

}

     //no solo podemos exportar funciones, sino tambien constantes 
     export const nombre = "matematicas"




     
//esto ya no nos sirve, creamos en package.json >>> "type":"module",
// //eexportamos
// module.exports={
//     suma, 
//     multiplica,
//      eleva, 
//      factorial
// }