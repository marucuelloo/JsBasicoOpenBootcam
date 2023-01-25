
// Crea un archivo JS que contenga las siguientes líneas
// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const ListaCompra =["fideos", "sal", "chocolate", "shampoo", "vinagre", "pimienta"];
console.log(ListaCompra);

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
ListaCompra.push("Aceite de Girasol");
console.log(ListaCompra);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
ListaCompra.pop("Aceite de Girasol");
console.log(ListaCompra);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const ListaPeli=[
    {titulo: "El Niño de Pijama a Rayas", director:"Mark Herman", fecha: new Date("2008, 9, 12")},
    {titulo: "Avatar", director:"James Cameron", fecha: new Date("01/01/2011")},
    {titulo: "Matrix", director:"Lana y Lina Wachowski", fecha: new Date("1999, 06, 10")}
]
console.log(ListaPeli);

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const Listapeli2 =ListaPeli.filter(obj=>obj.fecha>new Date("01/01/2010"));
console.log(Listapeli2); 

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = ListaPeli.map(pelicula => pelicula.director);
console.log(directores);
//otra manera:
const dire=ListaPeli.map((peli, indice)=>`${indice+1} - ${peli.titulo}: ${peli.director}`);
console.log(dire);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulo = ListaPeli.map(peli=>peli.titulo);
console.log(titulo);
//otra forma con los indices:
const titulo2=ListaPeli.map((peli, indice)=>`${indice+1} -  ${peli.titulo}`);
console.log(titulo2);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const concat=titulo.concat(directores);
console.log(concat);
//otra manera:
const concat2=ListaPeli.map((dire2)=>{
return dire2.director.concat(" es el director de la peli ", dire2.titulo)
})
console.log(concat2);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
console.log(...titulo, ...directores);


