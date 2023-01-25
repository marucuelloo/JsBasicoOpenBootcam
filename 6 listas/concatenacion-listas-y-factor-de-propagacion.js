//como unir 2 listas

//.concat(lista2)

const lista1=["hola",2, false, null];
const lista2=["adios", 8, true, undefined];

console.log(lista1.concat(lista2)); //['hola', 2, false, null, "adios", 8, true, undefined ]
//esto no modifica los valores de la lista 1
console.log(lista1); //["hola",2, false, null]
 //sin embargo tenemos que tener en cuenta:
const lista3=lista1.concat(lista2);
 console.log(lista3); //['hola', 2, false, null, "adios", 8, true, undefined ]


 //como unir dos listas con el factor de propagacion

 //me da los valores de la lista por separado
console.log(...lista3);  //hola, 2, false, null, adios" 8, true, undefined 

const lista4=[...lista1, ...lista2]
console.log(lista4); //['hola', 2, false, null, "adios", 8, true, undefined ]

//ERROR! mal entendido el concepto de factor de propagacion

const lista5=[lista1, lista2];
console.log(lista5); //[["hola",2, false, null]["adios", 8, true, undefined]]

