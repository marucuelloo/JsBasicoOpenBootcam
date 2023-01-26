//conjuntos o sets
//son otro tipo de objetos 

//listas pero con diferente comportamiento 

const array=[1,2,3,4,5,6,1,2,5, "hola", {id:5}, {id:5}]

//creamos un set
const miSet= new Set(array)
console.log(array);  //[1,2,3,4,5,6,1,2,5, 'hola', {id:5}, {id:5}]
console.log(miSet);  //Set{1,2,3,4,5,6, 'hola', {id:5}, {id:5}} //la referencia de cada objeto es distinta auqne los objetos sean iguales por eso aparece 2 veces

//diferencia de conj y array
//array conj ordenador de valor y obj
//set conjunto no ordenado de valores unicos, elementos unicos 
//no permiten alamcenar valores que ya existen, repetidos 
//ej para trabajar una bs sirve para asegurar que no se repiten valores en la misma

//metodos dentro de set para añadir o quitar valores
//añadir valores:   .add
miSet.add(9);
console.log(miSet); //Set{1,2,3,4,5,6, 'hola', {id:5}, {id:5}, 9} 
//y si agrego uno que ya tiene no lo va repetir 

//eliminar valores     .delete
miSet.delete("hola");
console.log(miSet); //Set{1,2,3,4,5,6, {id:5}, {id:5}, 9} 


/*
//quiero eliminar todos los valores del set
miSet.clear();
console.log(miSet); //Set{} 
*/

//saber si mi set tiene un valor
//.has()
console.log(array.includes(2)); //true
console.log(miSet.has(4)); //true
console.log(miSet.has(40)); //false


//conocer el tamaño del set
//.size()  prop no metodo
console.log(miSet.size); //9 valores unicos



//hacer iteracion dentro de los valores del set
//forEach

miSet.forEach(valor=>{
    console.log(valor)    //1,2,3,4,5,6, {id:5}, {id:5}, 9
});

//obtener los valores del set: 
const iteracion_miSet=miSet.values();
console.log(iteracion_miSet); //{[Iterator]}

//volver a convertir miSet a un array 
const ar_miSet=[...miSet];
console.log(ar_miSet);   //[1,2,3,4,5,6, {id:5}, {id:5}, 9] //nos aseguramos que es un array que no repite datos




