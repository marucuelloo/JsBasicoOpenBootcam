//Operador .valueOf() - obtener valores numericos a partir de literales
let a=2;
//esto se llama casteando
let b= new Number(3);

console.log(a); //2
console.log(b); //Number 3{}
console.log(a+b); //5
//esta form de arriba lo que hace es sumar el valor de la var con el valor de la var b:
console.log(b.valueOf()+a.valueOf()); //5

console.log(b.valueOf()); //3

//valueOf() = valor primitivo 

let str= new String("Hola soy un string");
console.log(str);  //en este caso devuelve 0:h, 1:o, 2:l 3:a ... 
console.log(str.valueOf()); //Hola soy un string

//NaN(Not a Number)- Infinity
//signifca que estas usando un metodo de variable numerica en algo que no es numerico 

let n=Number("adios");
console.log(n); //NaN
console.log(isNaN(n)); //true

let numerador=19;
let divisor=0 ;
let divisor2=null;

console.log(numerador/divisor); //Infinity
console.log(numerador/divisor2); //Infinity

//Cómo convertir los string a valores numericos con Number, parseInt y parseFloat

let number='5.89';
let number2=17.2;
let number3= 'hola';
console.log(typeof number);   //string

console.log(number+number2);    //5.8917.2 lo concateno xq tenemos un string y el + concatena 

console.log(Number(number)+number2); //23.09
//el Number permite castear este string (5.89) en un numero 

console.log(number+number2+number3);    //5.8917.2hola lo concateno xq tenemos un string y el + concatena 

console.log(Number(number3)+number2); //NaN xq cuando quiere tranformar el number 3 no encuentra su valor numerico

//parse extruir un valor dentro de otro. 
//convertir a un entero o un decimal 

console.log(parseInt(number)); //5 pero nos obvia todo lo que esta despues de la coma, pide que convierta en nro entero(sin coma )
console.log(parseFloat(number)); //5.89 // me devuelve con decimales 
let number4= 4;
console.log(parseInt(number4)); //4
console.log(parseFloat(number4));  //4

//Números hexadecimales(base 16)
//se usan xq al estar en base 16, la memoria de la pc en 1 y 0 s eusan los bytes que tienen 8 numeros (1 y cero) usando 2 byte x cada nro
//son numeros en base 16
//12345678abcdef
//no son decimales, no son de coma flotante

let numHex= '0x3a5b7';
//quiero saber lo que vale 
console.log(parseInt(numHex, 16)); //239031
console.log(parseInt(numHex, 16)*2); //478062

//Obtener los valores máximo y mínimo en Js 
//el minimo entre un nro y el sigueinte
let min_precision=Number.EPSILON;
let min_valor_js=Number.MIN_VALUE;
let max_valor_js=Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_js);
console.log(max_valor_js);
console.log(2**5000); //Infinity
console.log(2**1023); //8.9884...
console.log(2**1024); //Infinity