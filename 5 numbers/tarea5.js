// Crea un archivo JS que contenga las siguientes líneas
// - Una variable que contenga tu altura en centímetros (entero)

let alturacm=160;
console.log(alturacm);

// - Una variable que contenga tu altura en metros (número de coma flotante)
let alturaM=1.6;
console.log(alturaM);
// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso=64.5;
console.log(peso);
// - Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaredondo=alturaM.toPrecision(1);
console.log(alturaredondo)
// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoredondeo =parseInt(peso);
console.log(pesoredondeo);
// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let maxvalor=Number.MAX_VALUE;
let maxvalor2= maxvalor+1;
console.log(maxvalor);
console.log(maxvalor2);

if(maxvalor===maxvalor2){
    console.log( "el máximo valor que se puede obtener en Javascript + 1 es igual a " + maxvalor);
}else {
    console.log("el máximo valor que se puede obtener en Javascript + 1  no es igual a " + maxvalor);
}

