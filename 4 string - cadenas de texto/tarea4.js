//Crea un archivo JS que contenga las siguientes líneas
// - Una cadena de texto con tu Nombre
console.log(nombre="Marianela");
// - Otra cadena de texto con tu Apellido
console.log(apellido="Cuello") ;
// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = ` Hola soy ${nombre} ${apellido}!      `;
console.log(estudiante)
// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
console.log(estudiamteMayus=estudiante.toUpperCase());
// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
console.log(estudiamteMinus=estudiante.toLowerCase());
// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
console.log(estudiante.length);
// - Una variable que contenga la primera letra del Nombre
console.log(primerletra=estudiante.charAt(10));
// - Otra variable que contenga la última letra del Apellido
console.log(ultimaletra=estudiante.charAt(25));
// - Una cadena de texto que elimine los espacios de la variable "estudiante"
console.log(estudiante.trim().length); 
// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
console.log(estudiante.includes(`${nombre}`)); 