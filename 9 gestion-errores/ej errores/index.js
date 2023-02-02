//errores

const loggerEjercicio = require('./logger')  

loggerEjercicio.info("Hola, esto es un mensaje personalizado");

const miFuncion = val=>{
    if(typeof val=== "string"){
        return "Ingresaste correctamente un string"
    }
    //return false;
//palabra clave para gestionar errores:
//si es de tipo number hace lo de arriba, SINO lanza este error:
throw new Error("El valor debe ser un string")

}


//js interpete quiero que ejecutes el digo de try(codigo que puede fallar )
const nombre=44
try{
    //codigo que puede fallar

    const Mensjae= miFuncion(nombre)
    console.log(`el nombre ingresado es: ${nombre}`) 


}catch(e){
    //en caso de fallar, quiero que ejecutes
    console.log("ERROR!")
    console.error(` el valor de es: ${e}`)
    loggerEjercicio.error("Esto es un error, porque no se ingreso un valor de tipo string");
}finally{
    console.log("se va a ejecutar tanto si se produce un error como si no existe ninguno")
}
