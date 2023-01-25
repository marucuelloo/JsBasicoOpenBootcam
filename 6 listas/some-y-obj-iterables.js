//hasta ahora vimos si todos los elementos de una lista cumplen una condicion
//ahora veremos si algunos elementos de la lista cumplen una condicion

//.some()

const array=[3,7,2,4,7,9,42,35,7865,23,-2]

//true si alguno por lo menos 1 lo cumple (every eran todos los elementos)
const res= array.some(valor=>valor<0)

console.log(res); //true

const res2= array.some(valor=>valor<-10)

console.log(res2); //false

//quiero saber si en el array existe un valor determinado 
const existe= array.some(valor=>valor===90);
console.log(existe); //false
const existe2= array.some(valor=>valor===9);
console.log(existe2); //true 


const listaObjetos =[
    {nombre: "Maru", edad:34},
    {nombre: "Jonas", edad:04},
    {nombre: "Gas", edad:34},
    {nombre: "Nati", edad:43},
    {nombre: "Cele", edad:37},
]
const existeMaru = listaObjetos.some(persona=>persona.nombre==="Maru")
console.log(existeMaru); //true

const existePepe= listaObjetos.some(persona=>persona.nombre==="Pepe")
console.log(existePepe); //false


//como obtener una lista a partir de un objeto iterable 
//iterable xq con corchetes puedo accedener a partes del string
const str="hola soy Maru";
console.log(str[5]); //s

//Tranforma el string en un array
const ar_str = Array.from(str);
console.log(ar_str);// ['h', 'o', 'l.'...]

const set= new Set([2,3, "hola", 4])
const ar_set= Array.from(set);
console.log(ar_set); 

//keys()
const keys = array.keys();
console.log( keys) //{[Iterator]}
//console.log(typeof keys) //object 

const ar_key= Array.from(keys)
console.log(ar_key); //[0,1,2,3]    devuelve los indices del array 


