//trabajando con fechas
//4 formas distintas de inicializar fechas 

//opcion 1
const fecha = new Date()
console.log(fecha); //imprime la fecha de hoy 

//opcion2 
//atencion, los meses inicializan en 0 (0- enero, 11-diciembre )
//fechas formateadas en milisegundos 
const fecha2= new Date(1987, 10, 20, 1,23,52,192)
console.log(fecha2);

//opcion 3 por milisegundos
const fecha3= new Date(0);
console.log(fecha3);  //01/01/1970


//suma desde esta fecha de 1970 esos milisegunods 
const fecha4= new Date(10000000000000);
console.log(fecha4);
//resta de 1970
const fecha5= new Date(-10000000000000);
console.log(fecha5);

//opcion 4 a traves de string 
const fecha6= new Date("October 13, 1979 12:15:15");
console.log(fecha6);

//comparar 2 fechas

//una fecha es posterior a otra
console.log(fecha>fecha2); //true  hoy es mas tarde en el tiempo que fecha 2 que tenia año 87
console.log(fecha<fecha2); //false


//otra fecha7 con los valores de fecha 2
const fecha7= new Date(1987, 10, 20, 1,23,52,192);
console.log(fecha7); 
//tecnicamente 2 y 7 son iguales 
console.log(fecha2===fecha7); //false //ERROR NO SE PUEDEN COMPARAR FECHAS

//SI QUEREMOS COMPARAR FECHAS DEBEMOS CONVERTIR A MILISEGUNDOS 
//obtener milisegundos a partir de una fecha: fecha2.getTime()
console.log(fecha2.getTime()===fecha7.getTime()); //true  //esta es la forma de comparar la igualdad de fechas

//obtener el dia, el mes y el año de una fecha
//obtener el dia. usa el metodo .getDate() 
console.log(fecha2.getDate()); //20

//obtener el mes. .getMonth() (0- enero, 11-diciembre )
console.log(fecha2.getMonth()+1)//11 sumo uno para que imprima 11, ya que nov aca es 10 y yo quiero que imprima 11 

//obtener el año .getFullYear()
console.log(fecha2.getFullYear())//1987

//mostrar fecha en un string
console.log(fecha2);
//toLocalDateString()//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString('en-GB')) ;//20/11/1987
console.log(fecha2.toLocaleDateString('en-US')) ; //11//20/1987