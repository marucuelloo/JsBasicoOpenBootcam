////principales operaciones aritmeticas 

let a=3.5;
let b= 4.8;

//suma (+)
console.log(a+b);  //8.3

//resta(-)
console.log(a-b);  //1.2999999999999998

//multiplicacion
console.log(a*b);  //16.8

//division
console.log(a/b); //0.729166...7

////representacion de los numeros en cadenas de texto

console.log(typeof a);  //number
let a_s=a.toString();
console.log(a_s); 
console.log(typeof a_s); ///string 

////redondeo de numeros decimales

let c= 3.3;
let d = c*3;
console.log(d); //9.89999999..
//quiero solo 2 decimales:

//.toFixed(), le paso por (cuantos decimales quiero)
//limitar el numero de decimales al valor x
console.log(d.toFixed(2));
console.log(typeof d.toFixed(2)); // string  siempre devuelve string 

let e=1839.123456789;
let f=123456789
console.log(e.toFixed(2));//1839.12
console.log(f.toFixed(2));  //123456789.00 por mas que el nro no tenia decimales, lo devuelve con decimales  


//.toPrecision(x)
//limita el nro de cifras significativas.. 

console.log(e.toPrecision(7)); //1839.12
console.log(typeof e.toPrecision(7));  //string

console.log(f.toPrecision(7));  //1.1234568e+8 
console.log(typeof f.toPrecision(7)); // string