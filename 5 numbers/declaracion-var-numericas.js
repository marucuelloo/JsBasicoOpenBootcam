//5 - Numbers 
//declaracion de variables numericas(Enteros y decimales) 
//enteros
let a =5;
console.log(a);

//decimales:    se declaran igual que los enteros. No es como en otros lenguajes 
let b=0.1;
console.log(b);

//presicion
let c = 0.2;
console.log(b+c);  //0.30000000000000004   las var en js estan constituidas por un nro de byte y genera este error

//redondea para abajo sin decmales
//truco para obtener "valores reales"
console.log(Math.round((b+c)*100)/100);   //0.3 para redondear y existen librerias tb 

