//trabajar con metodos avanzados
//.map() .filter() .reduce()

const array=["cordoba", "bs as", "mendoza", "san luis"];

//map() agregarle valores al array 

// La función map recorre cada elemento de la lista original y 
//aplica una función a cada uno de ellos. En este caso, la función 
//es pelicula => pelicula.director, lo que significa que para cada elemento 
//"pelicula" de la lista original, se tomará su valor "director" y se agregará 
//a una nueva lista "directores".

const vale=array.forEach(v=>{
    console.log(v); //cordoba, bs as, mendoza, san luis 
    return 4 
})

console.log(vale);

//agrega lo msmo a cada valor 
const newArray= array.map(valor=>{
    return valor.concat(" hola")
})
console.log(newArray); //['cordoba hola', 'bs as hola', 'mendoza hola', 'san luis hola']


//un array modificando cada elemento 
//agregar un numero al inicio:
//colbac acepta dos parametros: el valor y el indice 
const newArray2= array.map((valor, indice)=>{

    return `${indice+1} - ${valor}` //indice +1 para que no arranque en cero 
})
console.log(newArray2);  //['1-cordoba, 2-bs as +, 3- mendoza, 4- san luis']


//optimizar mejor, es lo mismo mas corto:
const newArray3=array.map((valor, indice)=>`${indice+1} -  ${valor}`);
console.log(newArray3);


//filter() poner condiciones 
const ListaObjetos =[
    {nombre: "Maru", edad:34},
    {nombre: "Jonas", edad:04},
    {nombre: "Gas", edad:34},
    {nombre: "Nati", edad:43},
    {nombre: "Cele", edad:37},
]

//qiero una serie de valores; si quiero 1 solo valor uso find
//pero si quiero que cumpla una serie de condiciones de filtros: 
//true para los objetos que quiero pasar y false para los que no quiero pasar 
const personasMayores = ListaObjetos.filter(obj=>{
    if(obj.edad>30){
        return true;
    }else{
        return false;
    }
})
console.log(personasMayores);  //imprime todos menos jonas

//una opcion mas facil de leer:
const personasMayores2 =ListaObjetos.filter(obj=>obj.edad>30);
console.log(personasMayores2); //imprime todos menos jonas

//queremos todas las personas menos Maru
const nuevaLista=ListaObjetos.filter(obj=> obj.nombre !=="Maru");
console.log(nuevaLista); 


//reduce
////obtener un valor, un objeto, un algo a partir de una lista
//ej quiero sumar todas las edades
const valores=[3, 56, 23, 5, 90, 100]
//admite 4 parametros, 2 obligatorios 
//valor inicial o anterior current, indice y arrayoriginal 

const suma=valores.reduce((acumulado, cur, i, arrayOriginal)=>{
//sea un valor acumulativo 
 //al principio siempre va tener el valor del primer elemento del array
console.log(acumulado);   

//valor actual 
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);
return acumulado+cur;

})
console.log(suma); //suma los valores del array //277


