//iterar los valores de una lista 
//acceder a cada uno de los valores 

const array=["hola", 2, 5, 90, false, undefined];

//forma antigua y poco eficiente 
for(let i=0; i<array.length; i++){
    console.log(array[i]); //hola, 2, 5, 90, false, undefined
}

//forma ES6 (mas eficiente) .forEach()

array.forEach(valor=>{
    console.log(valor);  //hola, 2, 5, 90, false, undefined
});

let suma=0;
const arrayNums=[3, 6, 2, 77, 2, 3, 93, 19];
arrayNums.forEach(valor=>{
    console.log(valor); //3, 6, 2, 77, 2, 3, 93, 19
});

let suma2=0;
const arrayNums2=[3, 6, 2, 77, 2, 3, 93, 19];
arrayNums.forEach(valor=>{
    suma2 +=valor;
    console.log(valor); //3, 6, 2, 77, 2, 3, 93, 19
});
console.log(suma2); //205  --la suma de todos ellos

//Busqueda de un valor dentro de una lista  .find()
//quiero encontrar el elemento 90 del array

const variable =array.find(valor=>{
    if(valor===90){
        return true;
    }
})
console.log(variable); //90


//otra manera, mejor

const listaObjetos =[
    {nombre: "Maru", edad:34},
    {nombre: "Jonas", edad:04},
    {nombre: "Gas", edad:34},
    {nombre: "Nati", edad:43},
    {nombre: "Cele", edad:37},
]

const objeto = listaObjetos.find(o=>{
    if (o.nombre==="Jonas"){
        return true;
    }
})
console.log(objeto);  // {nombre: "Jonas", edad:04}
console.log(objeto.edad); //4

//y la mas sencilla 

const objeto2 = listaObjetos.find(o=>{
    return o.nombre === "Jonas";
})
console.log(objeto);  // {nombre: "Jonas", edad:04}
console.log(objeto.edad); //4


//en estas ocasiones podemos eliminar las llaves y el return y queda 
const objeto3 = listaObjetos.find(o=>o.nombre === "Jonas");

console.log(objeto);  // {nombre: "Jonas", edad:04}
console.log(objeto.edad); //4

//una manera mas eficiente 
//construccion de objetos:

//devuelve datos de la prop edad del objeto listaobjetos:
//en el anterior llamo todas las prop e imprimo la que yo quiero, aca diretamente llama lo que necesito
const {edad} = listaObjetos.find(o=>o.nombre==="Jonas");
console.log(objeto); // {nombre: "Jonas", edad:04}
console.log(objeto.edad); //4 
console.log(edad); //4

