//funciones tipo flecha - funciones anonimas
//nuevas formas de declrar funciones 

const array=[1,5,6,2,7,12,8,92]
//map acepta 3 parametros, 1 obligatorio
const array2 = array.map(function(valor){
    return valor*2
})
console.log(array2) //tiene el doble del array

//deberiamos usar las funciones de tipo flecha:
const array3=array.map((valor)=>valor*2)
console.log(array3) 

//funciones se guardan en una constante
const dobleValor=valor=>valor*2
console.log(doble(6))  //12
console.log(dobleValor(6))  //da error por que no la inicalizo


const array4=array.map(dobleValor)
console.log(array4)



function doble(valor){
    return valor*2
}

//cuando la defino con flecha se guarda en una constante y es necesario inicializar(la crea arriaba, primero antes de llamarla). 
//Cuando defino en function no la inicializo
//es recomendabl definir todas las va y todas las func arriba de todo

//ademas de seer funcion tipo flecha, es anonima porque no le estamos asignando ningun nombre 

//var y function se pueden hostear


//son lo mismo:
//const array3=array.map((valor)=>valor*2)
//const array4=array.map(dobleValor)