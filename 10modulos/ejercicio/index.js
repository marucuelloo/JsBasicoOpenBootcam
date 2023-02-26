// import{suma, eleva, nombre}from './modulos/mate.js'
// const sum=suma(4,12)
// console.log(sum)
// const potencia=eleva(2,21)
// console.log(potencia )
// console.log(nombre)

//si quieramos todas las prop, metodos del modulo
import * as controller from './controller.js';
import chalk from 'chalk';


const sum=controller.suma(4,5)
console.log(chalk.red(sum))

const mult=controller.multiplica(1,2)
console.log(chalk.green(mult))

