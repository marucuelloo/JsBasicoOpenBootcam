// import{suma, eleva, nombre}from './modulos/mate.js'
// const sum=suma(4,12)
// console.log(sum)
// const potencia=eleva(2,21)
// console.log(potencia )
// console.log(nombre)

//si quieramos todas las prop, metodos del modulo
import * as moduloMatematicas from './modulos/mate.js'
import getAutor, {libro} from './modulos/literatura.js'



const sum=moduloMatematicas.suma(4,12)
console.log(sum)

const potencia=moduloMatematicas.eleva(2,21)
console.log(potencia)
console.log(moduloMatematicas.nombre)


console.log(getAutor())
console.log(libro)


