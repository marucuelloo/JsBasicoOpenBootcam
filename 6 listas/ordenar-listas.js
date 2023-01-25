//.sort() forma eficiente de ordenar listas
//MODIFICA EL ARRAY
const array=[2, 5, 9, 15, 1, 2, 0, 4]
console.log(array);  //[2, 5, 9, 15, 1, 2, 0, 4]

//colbac (()=>{})
//a elemento anterio b elemento siguiente 
//debe retornar un valor, numerico 
array.sort((a, b)=>{
    //va entregra un indice negativo a<b => seria para ordenar de menor a mayor 
    //si es cero no hay cambios
    return -1; //invierte el orden 
})
console.log(array);


//orden de menor a mayor 
array.sort((a, b)=>{
    if(a<b){
        return -1
    }else if(a>b){
        return +1
    }else{ //a===b
        return 0
    }
})
console.log(array);  

//orden de mayor a menor 
array.sort((a, b)=>{
    if(a<b){
        return +1
    }else if(a>b){
        return -1
    }else{ //a===b
        return 0
    }
})
console.log(array);

//otra manera de hacerl cuando es array de numeros 
//ordenar unicamente array numericos
//menor a mayor

const arrayNumerico =[4,1,7,3,1,56,1,546]
arrayNumerico.sort((a,b)=>a-b);
console.log(arrayNumerico);

//mayor a menor
arrayNumerico.sort((a,b)=>b-a);
console.log(arrayNumerico);

/////////////////////////////
//interesante en arrays de objetos
const listaObjetos =[
    {nombre: "Maru", edad:34},
    {nombre: "Jonas", edad:04},
    {nombre: "Gas", edad:34},
    {nombre: "Nati", edad:43},
    {nombre: "Cele", edad:37},
]

//quiero ordenar con edad de menor a mayor
listaObjetos.sort((a,b)=>{
    if(a.edad<b.edad){
        return -1; //significa que a queda por delante, que a tiene un indice menor que b
    }else if(a.edad>b.edad){
        return+1;
    }else{  //a===b
return 0
    }
})
console.log(listaObjetos);

listaObjetos.sort((a,b)=>a.edad -b.edad);
console.log(listaObjetos);
//si quiero hacer de mayor a menor es
listaObjetos.sort((a,b)=>b.edad -a.edad);
console.log(listaObjetos)