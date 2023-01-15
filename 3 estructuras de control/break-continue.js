//Casos muy especificos - break, continue 
//se usan en casos muy excepcionales.no son buenas practicas 

let lista = [1,2,3,4,5,6,7,8];
for (let i=0; i<lista.length; i++){
    
    
    //seria volver arriba..no imprimir ese nro 
    if(lista[i]===3){
        continue;
    }
    

    var j=50;
    const k =100;
    console.log(lista[i]);

    //saltarse todo lo demas, llegar hasta donde indica el break y salir del bucle 
    if(lista[i]>5){
        break;
    }
}


//cual es el ambito de un bucle:
//alcance que tienen las variables declaradas dentro del bucle 
//i esta formando parte solo dentro del bucle  (es un let)
console.log(i)
console.log(j)

//console.log(k)   // no se puede imprimir xq es una cte dentro del bucle 