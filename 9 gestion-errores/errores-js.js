//errores
//cuando usamos librerias no podemos asegurar 100 que se ejecute el codigo, entonces gestinamos errores

//registro de errores e informacion
const miFuncion = val=>{
    if(typeof val=== "number"){
        return 2*val
    }
    //return false;
//palabra clave para gestionar errores:
//si es de tipo number hace lo de arriba, SINO lanza este error:
throw new Error("El valor debe ser de tipo número")

}
console.log(miFuncion(4))  //8
// const elDoble=console.log(miFuncion("ala")) //undefined
// console.log(elDoble)    //no lo imprime porque el codigo se frena en el error


//js interpete quiero que ejecutes el digo de try(codigo que puede fallar )
const numero=8
const num2="3"
try{
    //codigo que puede fallar
    console.log("esta ejecutandose de manera correcta ")
    // const doble= miFuncion(4)//en lugar de harcode lo paso por var
    // const doble= miFuncion(numero)
    // // console.log(doble)  //8
    // console.log(doble)  //16
    const doble2= miFuncion(num2)
    console.log(doble2)   //imprime error  en try catch xq le pase un string


}catch(e){
    //en caso de fallar, quiero que ejecutes
    console.log("ERROR!")
    console.error(` el valor de es: ${e}`)
}finally{
    console.log("se va a ejecutar tanto si se produce un error como si no existe ninguno")
}

//InternalError, SyntaxError, TypeError, RangeError y ReferenceError
//// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error

