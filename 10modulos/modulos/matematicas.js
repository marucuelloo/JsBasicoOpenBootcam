//un modulo es una parte de codigo que se puede reutilizar en diferentes partes del desarrollo
//primero exporto estas funciones. hacerlas publicas, para que puedan ser usadas por los otros archivos
//luego importarlas desde las quiera llamar 


function suma(a, b) {
     return a + b
}
function multiplica(a, b) {
     return a * b
}
function eleva(a, b) {
     return a ** b
}
function factorial(a) {
     //factorial de 5: 5*4*3*2*1
     let factorial = 1
     for (let i = 2; i <= a; i++) {
          factorial *= i;

     }
     return factorial;
}

//dentro del module podemos pasar una propiedad para exportar las funciones
//eexportamos
module.exports = {
     suma,
     multiplica,
     eleva,
     factorial
}