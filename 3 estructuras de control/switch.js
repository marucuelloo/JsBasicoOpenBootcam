//switch 
//en funcion de un valor poner varias condiciones

//sentencias switch
let nota=5
switch(nota){
    case 5:
        console.log("En hora buena, has obtenido un sobresaliente");
        break;
    case 4:
        console.log("Buen trabajo, chequea los errores para mejorar");
        break;
    case 3:
        console.log("falta practicar, tienes suficiente");
        break;
    case 2:
        console.log("Nos haz aprobado por poco");
        break;
    case 1:
        console.log("no haz estudiado nada, trabaja mas para la proxima ");
        break;

        //break es para que no lo tome como un paso a paso, no continue si se cumple. 
//es buena practica siempre poner un default. 
        default:
            console.log("error")
            break;
}