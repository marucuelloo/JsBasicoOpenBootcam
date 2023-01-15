//if else + if else 

let nota = 5;
/* esto seria una manera muy engorrosa 

if(nota === 5){
    console.log("En hora buena, has obtenido un sobresaliente");
}else{
    if(nota===4){
        console.log
    }else{
        if(nota===3){

        }
    }
}*/

//if else - if else 
if(nota === 5){
    console.log("En hora buena, has obtenido un sobresaliente");
}else if(nota===4){
    console.log("Buen trabajo, chequea los errores para mejorar");
}else if(nota===3){
    console.log("falta practicar, tienes suficiente");
}else if(nota===2){
    console.log("Nos haz aprobado por poco");
}else if(nota===1){
    console.log("no haz estudiado nada, trabaja mas para la proxima ");
}else{
    console.log("error, introduce nota entre  1 y 5")
}


