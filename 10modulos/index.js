//modulo, parte del codigo que se puede reutilizar en diferentes partes del desarrollo
//importar factorial y suma del modulo matematicas
//2 opciones

//formas de importar/exportar modulos
//1. CommonJS -require
//2. Import ES6 -import

//1 commonJs
//importamos las funciones de matematicas.js
const moduloMate =require("./modulos/matematicas.js")

const fact=moduloMate.factorial(5)
console.log(fact)
const sum=moduloMate.suma(12,90)
console.log(sum)
// const fact2=factorial(5)
// console.log(fact2)

// const factorial=moduloMate.factorial
// const suma=moduloMate.suma
// console.log(moduloMate.suma)

// const{factorial, suma}=moduloMate
const{factorial, suma}=require("./modulos/matematicas.js")

// const fact=factorial(5)
//  console.log(fact)

//  const sum=suma(12,90)
//  console.log(sum)
//console.log(module)