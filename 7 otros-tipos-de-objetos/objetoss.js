//trabajando con objetos 

const obj={
    id:4,
    nombre: "Jonas",
    apellido: "Cuello",
    IsSobrino: true,
    juguetes: ["camiones", "pelota de futbol"],
    "4 - juegos": [1,2,3,4], //tb se pueden definir asi las propiedades con "" ''

}
//como podemos acceder a los valores de este objeto:
//opcion 1
console.log(obj["4 - juegos"]); //[1,2,3,4]
//opcion 2
console.log(obj.id); //4  //pero esta manera no se puede usar para "4 - juegos"

//definir una propiedades con variables. llamar prop con var declaradas antes
//acceder a propiedades a traves de variables:
const prop = "IsSobrino";
console.log(obj[prop]); //true

//replicar este objeto
const obj2= obj;  //en este caso no solo estamos copiando el objeto, estamos copiando la referencia en memoria 
console.log(obj2);

obj2.nombre="Martino";
console.log(obj2.nombre); //Martino
console.log(obj.nombre); //Martino  // cambia el objeto original  //con nro o var primitiva no pasa, pero si en los objetos 

//hago cambio en obj2, hago cambio en la localizacion de la memoria, los cambios de uno se refeljan en el otro

//en cambio si hago
let val1=4;
let val2=val1;

val2=6;
console.log(val1); //4
console.log(val2); //6

//a la hs de igualar valores o elementos primitivos (number) hace copia y almacena en un lugar en memoria (distinto a lo anterior)
//obj no ocurre eso

//copiar y duplicar obj dentro de otro
//como en listas uso operador ...
const obj3={...obj};
console.log(obj.nombre);  //Martino
console.log(obj3.nombre); //Martino

obj3.nombre="Chinito";
console.log(obj.nombre);  //Martino
console.log(obj3.nombre);  //Chinito

//////////////////////////
//como ordenar listas de objetos en funcon de una propiedad 

const listaPeliculas=[
    {titulo: "Lo que el viento se llevo", anio: 1939},
    {titulo: "Titanic", anio: 1997},
    {titulo: "Moana", anio: 2016},
    {titulo: "El Efecto mariposa", anio: 2004},
    {titulo: "Ted", anio: 2012},
]
console.log(listaPeliculas);

//ordenar las pelis por año.. de mas antigua a mas nueva
//.sort()  metodo que muta el valor de la lista original
listaPeliculas.sort((a,b)=>a.anio-b.anio);
console.log(listaPeliculas);

//mayor a menor
listaPeliculas.sort((a,b)=>b.anio-a.anio);
console.log(listaPeliculas);


//ordenar por titulo y tambien se lo ordena de menor a mayor 
listaPeliculas.sort((a,b)=>a.titulo-b.titulo);
console.log(listaPeliculas);

