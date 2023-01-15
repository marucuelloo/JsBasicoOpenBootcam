//hay 3 maneras de definir varibales 

var variable;
let variablelet;

const constante = "Hola soy una constante";

var a= 1;
console.log(a);

a=4;
console.log(a);

//variable puede variar

console.log(constante);

//constante="adios"       --no se puede reasignar valor a una constante - nos da error 

let b = 3;
console.log(b);

b = 5;
console.log(b);


//diferencia entre let y var
//var afecta a todo el codigo y let solo afecta al bloque donde esta sienod declarado (var global, var local)

var variable = "hola soy una variable VAR";
for(var i=0; i<3; i++){
    //es una mala practica volver a declarar la variable, se hace a los fines practicos
    var variable ="soy la segunda variable VAR"

}
console.log(variable);

let variablelett = "hola soy una variable LET";
for(let i=0; i<3; i++){w
    //no se va leer nunca. mala practica que se llamen igual 
    let variablelett ="soy la segunda variable LET"

}
console.log(variablelett);

//////////////typeof dice el tipo de variable

var num =4;
console.log(typeof num );
num="hola soy num";
console.log(typeof num );

//no es buena practica cambiar el tipo a la variable 