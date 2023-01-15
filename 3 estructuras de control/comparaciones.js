//comparaciones 

//IGUALDAD
//igualdad debil 
if(5==5){
    console.log("5 es igual a 5")
}
//igualdad fuerte
if(5===5){
    console.log("5 es muy igual a 5")
}
//ejemplo
let a=5
console.log(typeof a)
let b="5"
console.log(typeof b)
// == solo compara el valor
// === compara valor y tipo 
if(a==b){
    console.log("a es igual a b - Debil")
}
if(a===b){
    console.log("a es igual a b - fuerte")
}

//COMPARACION DE DESIGUALDAD

let c = 4;
let d = "4";

//hay 3 tipos 

//si es diferente, si no es igual 
//debil sean difeeentes en valor 
if (c!=d){
    console.log("c es diferente a d - debil ")
}
//fuerte sean diferentes en valor o en tipo 
if (c!==d){
    console.log("c es diferente a d - fuerte")
}

//comparacones mayor que y menor que 

let max=10;
let min = 5;

if(max>min){
    console.log("max es mayor que min")
}
if(max>=10){
    console.log("max es mayor o igual que min")
}

if(min<max){
    console.log("min es menor que max")
}
if(min<=max){
    console.log("min es menor o igual que max")
}



