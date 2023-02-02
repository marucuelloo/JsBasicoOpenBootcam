//FUNCIONES
//1. Crea una función que devuelva el número PI con dos decimales. Utiliza la variable PI que ya existe en javascript
function nroPi(){
    console.log((Math.PI.toFixed(2)));
}
nroPi()

//2. Crea una función que reciba un parámetro, un dni, y devuelva la letra del mismo. Si el dni pasado tiene algún error devolverá “”.


function getDniLetter(dni) {
  if (!dni || typeof dni !== 'string' || dni.length !== 8 || isNaN(dni)) {
    return "''";
  }
    //String con las letras del dni
  const letters = "TRWAGMYFPDXBNJZSQVHLCKE";
  //El resto de dividir el número por 23 lo guardamos en indice
 //Ese indice coincide con la posición en el String
  const letterIndex = parseInt(dni) % 23;
  return letters[letterIndex];
}

console.log(getDniLetter("12345678")); // "Z"
console.log(getDniLetter("1234567A")); // ""
console.log(getDniLetter(12345678)); // ""
//La función getDniLetter recibe un parametro dni y comprueba si cumple los requisitos para ser un DNI español, si es asi, se saca el resto de la division entre 23 y se busca en una cadena de caracteres (TRWAGMYFPDXBNJZSQVHLCKE) la letra correspondiente, si no cumple con los requisitos devuelve una cadena vacia.

//OPCION2
function unParametroMasDni(DNI, letra){
    let dni2=DNI.toString() //la paso a string para poder usar el metodo length
    if(dni2.length === 8 && typeof DNI==="number" ){
        console.log(letra)
    }else{
        console.log('""');
    }};
    unParametroMasDni(33809269, "G")





