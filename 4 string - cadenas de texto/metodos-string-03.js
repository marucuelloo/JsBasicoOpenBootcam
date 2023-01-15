//metodos de cadenas de texto(parte 3)

//expresiones regulares
//https://regexr.com
//es una forma de hacer una busqueda mas avanzada 

//coincidencias que tenemos en un texto

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles.";


//cuantas veces aparece la palabra no. incluye los no dentro de las palabras
console.log(texto_largo.match(/no/g));  //[no, no, no, no]

//si este texto contiene determinada palabra
//existe la palabra dentro del texto?
console.log(texto_largo.includes("prefiere")); //true
console.log(texto_largo.includes("terremoto")); //false 


//saber si un texto empieza con una palabra

console.log(texto_largo.startsWith("arboles"));  
console.log(texto_largo.startsWith("Tito no es un mono"));   //true  //es case sensitive. distingue may y min


//saber si un texto termina con otra palabra
console.log(texto_largo.endsWith("árboles."));   //true

