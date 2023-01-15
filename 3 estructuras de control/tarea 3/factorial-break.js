// factorial-break.js 
//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
//n! = 1 x 2 x 3 x 4 x 5 x … x (n-1) x n.
//10!=1*2*3*4*5*6*7*8*9*10 =3.628.800

let x = 10; 
var i = x-1;


while(x){
    x *= i; //x=x*i
    i--;
    if (i <= 1) break;
}
console.log(x);