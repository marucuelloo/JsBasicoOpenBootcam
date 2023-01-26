//objetos.js ejercicio 2
// Crea un archivo llamado objetos.js que contenga las siguientes líneas
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const obj={
    nombre: "Marianela Del Valle",
    apellido: "Cuello",
    edad: 34,
    altura: 1.60,
    isDev: false,
}
// - Una variable que obtenga tu edad a partir del objeto anterior
const edad=obj.edad;
console.log(edad); 
// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

//const friendsData = {
    
    const friend1= {
        nombre: "cele",
        apellido: "martinez",
        edad: 37,
        altura: 1.60,
        isdev: false,
    };
    const friend2= {
        nombre: "ro",
        apellido: "colazo",
        edad: 34,
        altura: 1.50,
        isdev: false,
    }

//};

const DatosPersonales = [{...obj}, {...friend1}, {...friend2},  ];
console.log(DatosPersonales);

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const peopleList2 = [obj, friend1, friend2];
DatosPersonales.sort(function(a, b) {
    return b.edad - a.edad;
});
console.log(DatosPersonales);