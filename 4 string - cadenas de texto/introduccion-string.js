//session 4 - Strings (cadenas de caracteres)
//buena practica manetener el mismo tipo de notacion

let str_doble ="Hola soy un texto con comillas dobles ";
let str_singular ='Hola soy un texto con comillas simples';

console.log(str_doble);
console.log(str_singular);

let str_comillasdobles = "el otro dia me dijo lit 've a sacar la basura!'";
let str_comillassimples = 'el otro dia me dijo lit "ve a sacar la basura!"';
let str_comillas2 = "el otro dia me dijo lit \"ve a sacar la basura!\"";

console.log(str_comillasdobles);
console.log(str_comillas2);
console.log(str_comillassimples);

////////////////comillas invertidas(backticks) ``
//lo que permite es introducir variables dentro del texto.
//y permite los saltos de linea dentro del string 

let str_backticks =`Hola esto es un string con backticks`;
console.log(str_backticks);

let nombre="Maru";
let saludo=`hola, ${nombre} bienvenida`;

console.log(saludo);

//Plantillas HTML 

let plantilla = `<html>

<h1>Página web de ${nombre}</h1>
<p>Esto es un párrafo</p>

</html>`

console.log(plantilla)


/////////introducción de Variables en html 

let libros = ["empieza por el porque", "el monje que vendio su ferrari", "el poder del ahora"];

