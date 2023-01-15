//metodos de candeas de texto (parte2)

//convertir toda la cadena de textos a mayusculas o minusulas

let input = "Cancer";
let db="cancer";

//toLowerCase() - to UpperCase()

console.log(input===db)  //me va dar false por mayusuclas y minusuculas 
console.log(input.toLowerCase()) //cancer --paso la c a minusula
console.log(input.toLowerCase===db.toLowerCase);   //true pasa a las 2 a minusula
console.log(input.toUpperCase()) //CANCER
console.log(input.toUpperCase===db.toUpperCase); //true pasa a las 2 a mayusucula 

//FORMAS DE CONCATENAR 2 CADENAS DE CARACTERES

let str_1= "hola soy la primera cadena. ";
let str_2 = " Y yo soy la segunda cadena. ";

//opcion 1: concat - mejor practica 
console.log(str_1.concat(" ",str_2, "MAS COSAS"));

//opcion 2: + 
console.log(str_1 + "" + str_2);

//opcion 3 
console.log(`${str_1} ${str_2}`)



// eliminar espacios al inicio y al final 
let str_3 ="    Hola soy un string con espacios al final.   ";
console.log(str_3.length);    //48
//trim()
//eliminar caracteres vacios del principo y del final 
console.log(str_3.trim().length);    //41

//trimStart()
//eliminar solo espacios del principio: (si tiene en cuenta los espacios del final)
console.log(str_3.trimStart().length);    //44

//trimEnd()
//elimina carcatres vacios al final de la cadena 

console.log(str_3.trimEnd().length)    //45


//obtener el caracter, la letra que hay en cierta posicion

let str_4 = "Hola soy el string numero 4"; //esto es lo msimo que ["H", "o", "l", "a", "","s"...]
console.log(str_4.charAt(5));   //s

//las cadenas de caracteres se pueden tratar como listas de caracteres 
console.log(str_4[5]); //s

//obtener la posicion de una palabra dentro de una cadena de caracteres

let str_5 = "Hola soy Maru y me gusta el chocolate. Mi nombre es Maru y mi apellido Cuello";
console.log(str_5.indexOf("Maru"));   //9
//nos va seguir pasando el indice de la primera Maru que encuentra 
//si no encuentra el caracter devuelve -1. ej le digo que busque Madu
console.log(str_5.charAt(9))   //M

//posicion de la ultima instancia que encuentra 
console.log(str_5.lastIndexOf("Maru"))
