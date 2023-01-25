//como podemos comparar listas
//.every()
//si todos los componentes de la lista cumplen una condicion

const array =[4, 6, 7,8,3,6,2,1,-4,12,5,-40]

const resultado =array.every(valor=>{
    if(typeof valor ==="number"){
        return true
    }else{
        return false 
    }
})
console.log(resultado); //es true xq son todos number 

const resultado2 =array.every(valor=>{
    if(valor>0){
        return true
    }else{
        return false 
    }
})
console.log(resultado2)  //false xq hay negativos

//manera mas sencilla 

const resultado3 = array.every(valor=>valor>0); //aca le decis devolveme true si esto...sino es false 
console.log(resultado3); //false


///////////comparacion de listas

const ar1=[1,2,3,4]
const ar2=[1,2,3,4]


console.log(ar1===ar2) //da false xq las listas no se pueden comparar de esta manera 
//se puede hacer una funcion conociendo el valor de every 


const compararArray = (array_1, array_2)=>{
    if(array_1.length != array_2.length) return false
    const res = array_1.every((valor, i )=>{
        if(valor===array_2[i]) return true
        return false 
    })
}
console.log(compararArray(ar1, ar2));
//no se xq da undefined, x tal razon usar la formula sencilla que funciona bien

//mas sencilla 
const compararArray2 = (array_1, array_2)=>{
    //si no son iguales sale y devuelve false 
    if(array_1.length != array_2.length) return false;
    //si son iguales las longitudes, comparo cada valor entre si 
    const res = array_1.every((valor, i )=>valor===array_2[i]);
    return res;
        
}
console.log(compararArray2(ar1,ar2));

const ar3=[1,2,3,6]
console.log(compararArray2(ar1,ar3));
