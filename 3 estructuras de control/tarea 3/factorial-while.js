//factorial-while.js 
//Este archivo debe calcular el factorial de 10 utilizando un bucle while
//n! = 1 x 2 x 3 x 4 x 5 x … x (n-1) x n.
//10!=1*2*3*4*5*6*7*8*9*10 =3.628.800
let factorial =10;
let r=1;
while(factorial!=0){
r=r*factorial;
factorial --;
}
console.log(r);