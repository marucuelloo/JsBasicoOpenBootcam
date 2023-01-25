//Como trabajar con listas (arreglos, vectores, arrays)
//forma1:
let array = new Array(1, 2, 3, 4, 5, 6);
//forma 2: mas comun
let array2=[1, 2, 3, 4, 5, 6];
//recibe todo tipo de valores 
let var1=45;
let array3= [1, "hola", false, {id:5},  null, undefined, var1]

console.log(array3);  //[1, "hola", false, {id:5},  null, undefined, var1]

//como podemos acceder a los valores de un array a traves de su posicion:
//los indices son en base 0
///array[indice]=>0, 1, 2, 3, 4, 5,...
console.log(array3[0]); //1
console.log(array3[1]);   //hola
console.log(array3[2]);   //false
console.log(array3[3]);   //{id:5}
console.log(array3[4]);   //null

//metodos para introducir nuevos valores en nuestros arrays
//.push() .unshift() => mutan el valor de nuestro array
//le decimos que array va cambiar de valor:
//-- se esta cambiando el valor del array. en los framework nuevos no conviene cambiar los valores de los array

//agregar valores al final --> Push  
//le podemos agregar todo lo que querramos separado por comas 
array3.push("final", 45, 100, false);
console.log(array3);   //[1, "hola", false, {id:5},  null, undefined, var1, "final", 45, 100, false]

//valores al inicio --> Unshift
array3.unshift("inicio", 87, 99);
console.log(array3); //["inicio", 87, 99, 1, "hola", false, {id:5},  null, undefined, var1, "final", 45, 100, false]


//metodos para eliminar valores en nuestros arrays
//.pop()  .shift()=> mutan el valor del array

let array4=[1, 3, "hola", false];
//valores al final ->Pop
array4.pop();
console.log(array4); // [1, 3, "hola"] borra el false 
array4.pop();
console.log(array4);  // [1, 3 ]

//valores al principio -> Shift
array4.shift();
console.log(array4); //3

//metodo que funciona donde querramos. eliminar modificar o añadir valores en el array:
// .splice(x, y, z)
const array5 =[1, 2, 3, 4, 5, 6];
//Eliminar valores:
//.splice(indice, numValoresAEliminar)
//pocision 2, no borra nada 
array5.splice(2, 0);
console.log(array5);  //[1, 2, 3, 4, 5, 6]
//pocision 2, borra un caractres, posicion 2 
array5.splice(2, 1); 
console.log(array5);//[1, 2, 4, 5, 6]
//pocision 2, borra 2 caractres
array5.splice(2, 2); 
console.log(array5);//[1, 2, 6]  // teniendo en cuenta que ya se borro el 3 en la anterior la posicion 2 tiene 4 . y como son 2 cacarteres borra 4 y5 

//Añadir valores:
//.splice(indice, o, valoresAAgregar)
array5.splice(2, 0, "hola",3, 9 );
console.log(array5); //[1, 2, 'hola', 3, 9, 6]

//modificar valores
//.splice(indice, 1, valores)
//quiero cambiar el hola por un 3 
array5.splice(2,1,3 );
console.log(array5); //[1, 2, 3, 3, 9, 6]

array5.splice(2,1,3, 5, 6 );
console.log(array5); 