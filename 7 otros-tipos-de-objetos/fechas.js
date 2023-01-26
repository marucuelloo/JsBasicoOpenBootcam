// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
const fecha = new Date()
console.log(fecha); 

// - La fecha de tu nacimiento
const fechanac= new Date(1988, 06, 02, 19,20,00,000)
console.log(fechanac)

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const esMasTarde = fecha > fechanac;
console.log(esMasTarde);
// - Una variable que contenga el día de tu nacimiento
const diaNac = fechanac.getDate();
console.log(diaNac);
// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNac = fechanac.getMonth()+1;
console.log(mesNac);
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anioNac = fechanac.getFullYear();
console.log(anioNac);