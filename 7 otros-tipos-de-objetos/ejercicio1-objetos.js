//ejercico 1 objetos
// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
// - Un nuevo Set con los nombres de tu familia
const familia=["Juan Cuello", "Alcira Dominguez", "Natalia Cuello", "Marianela Cuello",  "Gaston Hruby", "Jonas Cuello"];
const setFamilia= new Set(familia);
console.log(setFamilia);

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
setFamilia.add("Marianela Cuello", "Marianela Cuello" );
console.log(setFamilia);

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
setFamilia.add("Javascript");
console.log(setFamilia);