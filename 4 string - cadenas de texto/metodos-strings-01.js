//concatenar diferentes string 
//metodos mas usados con cadenas de caracteres

//como obtener la longitud de un string
let str="Hola soy un string";
console.log(str.length)

//obtener partes de cadenas de caracteres
//slice() substring() substr()

//los primeros 2 es, arrancan en el indice 5 y van agregando caracteres hasta el 2do indice del parentesis (10)
//en el ej arranca en 5, y avanza hasta llegar a 10 (5 posiciones en este caso )
let slice_str = str.slice(5, 10)
console.log(slice_str)   //resultado: soy u

//SUBSTRING
let substring_str= str.substring(5,10)
console.log(substring_str)  //resultado: soy u


//SUBSTR EN DESUSO
// arranca en el indice indicado y suma tantos caracteres como dice el 2di indice del parentesis.
//en el ej arranca en 5 y agrega 10 caracteres mas 
let substr_str=str.substr(5,10)
console.log(substr_str)


//reemplazar parte del contenido de una cadena de texto

let cadena="Hola mi nombre es Maru ";
console.log(cadena);



//al utilizar cadenas solo reemplaza la primera instancia 
console.log(cadena.replace('Maru', 'Maruca'));

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles.";

//el metodo replace solo cambia el primer los
console.log(texto_largo.replace('los', 'cinco'))


//si quieramos cambiar todas las instancias: EXPRESIONES REGULARES

//al utilizar cadenas solo reemplaza la primera instancia 
//al utilizar la expresion regular global regular/g (global), reemplaza todas las instancias 

console.log(texto_largo.replace(/los/g, 'cinco'))





