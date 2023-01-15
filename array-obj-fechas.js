//Listas, arrays o arrgelos
//conj de var puestas en un orden

const lista =[1,"hola", true, undefined, null];
const lista2= new Array(1,"hola", true, undefined, null);
const lista3= new Array(3);
lista3[0]="soy el primer elemento, index 0";
const lista4=[lista, lista2, lista3]




console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);
//objetos
//son representacion en datos de objetos en la vida real 

const movil = {
    altura: 10,
    anchura:5,
    marca: "Xiaomi",
    isWhite: false,
    contactos:["gorka", "martin", "raul"],
    tarjeta:{
        marca: "sandik",
        almacenamiento: 32
    },
    //otra forma de definir los atributos:
    "altura-tarjeta": 4,
}

//podemos definir nuevas propiedades, luego de haber creado el objeto 
movil.anio =2019;
movil.marca = "samsung";

console.log(movil.tarjeta.marca)
console.log(movil["altura-tarjeta"])


//fechas
//librerias de apoyo Moment.js 
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); // usando los milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 2, 15);  //enero es 0 feb1 marzo 2 ....
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth()+1;
const anio = ahora.getFullYear();

console.log(dia, mes, anio);


