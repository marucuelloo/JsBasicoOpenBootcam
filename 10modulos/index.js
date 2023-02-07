//importar factorial y suma del modulo matematicas
//2 opciones

//formas de importar/exportar modulos
//1. CommonJS -require
//2. Import ES6 -import

// const moduloMate =require("./modulos/matematicas.js")

// // const factorial=moduloMate.factorial
// // console.log(moduloMate.eleva)

// const{factorial, suma}=moduloMate

// const fact=moduloMate.factorial(5)
// console.log(fact)

const{factorial, suma}=require("./modulos/matematicas.js")




// const sum=moduloMate.suma(12,90)
// console.log(sum)

// const fact2=factorial(5)
// console.log(fact2)


const fact=factorial(5)
console.log(fact)

const sum=suma(12,90)
console.log(sum)

//console.log(module)