// Crea un archivo JS que contenga las siguientes líneas
// - Una función sin parámetros que devuelva siempre "true"
function sinParam() {
    console.log(true);
}
sinParam();
// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
//opcion 1
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hola soy una promesaa");
        resolve();
    }, 5000);
})


//opcion 2
const miPromesa2 = new Promise((resolve, reject) => {

    const variable = setTimeout(function () {
        console.log("Hola soy una promesa")
    }, 5000)
    //si esta todo correcto
    if (variable >= 5000) {
        resolve()
    } else {
        reject()
    }
})

miPromesa2
    .then(() => variable)
    .catch(() => console.log("ERROR, no han pasado 5 segundos"))



// - Una función generadora de índices pares automáticos

function* evenNumberGenerator() {
    let index = 0;
    while (true) {
        if (index % 2 === 0) {
            yield index;
        }
        index++;
    }
}

const evenNumbers = evenNumberGenerator();
console.log(evenNumbers.next().value); // 0
console.log(evenNumbers.next().value); // 2
console.log(evenNumbers.next().value); //4
console.log(evenNumbers.next().value); // 6


