//que son las funciones, como se declaran y como se utilizan
//son bloques de codigo que se ejcutan con fin especifico  
//ej funcion saludar
//declarar funcion:
// saludar(2, "adios", false)
// function saludar(parametro1, parametro2, parametro3){
//     console.log("Hola")
// }

//el parametro es nombre, le paso que en nombre quiero que diga maru y salude al parametro
saludar("Maru")

const nom="Maru2"
saludar(nom)


function saludar(nombre){
    console.log(`Hola ${nombre}`)
}

    //creo una nueva funcion
    //2 creo la var
let nombre2="Gas"
//3 llamo la funcion con la var 
despedir(nombre2)
console.log(nombre2);

//1 creo la funcion
    function despedir(nombre2){
        nombre2="Jonas"
        console.log(`Adios ${nombre2}`)
    
    }

    //por mas que cambie el valor dentro de la funcion, por fuera nombre2=Gas y por dentro nombre2=jonas

    /////////////////
    //que pasa si en lugar de pasar un dato primitivo, le paso un objeto

    //1- creo un objeto con 2 prop
    let persona ={nombre: "Pepe", apellido: "Gonzalez"} 
//3- llamo la funcion que cree y el objeto que quiero llamar 
saludarPersona(persona)
console.log(persona)
 //2- creo una funcion para saludar que llame las prop del objeto
function saludarPersona(objeto){
    objeto.apellido="Villar"  //aca que cambio el apellido, se modifica dentro y fuera de la funcion 
        console.log(`Hola ${objeto.nombre}  ${objeto.apellido}`)  //Hola pepe Villar 

    }
    // saludarPersona()  //en objeto da error porque no pasas param
    saludar()  //en string no da error dice hola undefined


    /////////////////////////////

    function imprimeNumero(numero=7){  //parametros por defecto 
        console.log(numero)  //si no paso nada 7, si le paso algo en este caso 9
    }
    imprimeNumero(9)

    //si yo en el parametro no le paso nada, me va decir undefines. Ahora si yo igualo al parm dela funcion con algo, es 
    //siemre ese valor por defecto,se va inicializar siempre ahi, pero si yo al llamar a la funcion lepongo otro num se va poner el num que llamo con la funcion


    //Parametros indeterminados 
    //usamos el factor de propagacion
    function imprimir(...parametros){
        console.log(parametros)
    }
    imprimir (1,2,9,2, "hola", {id:9})

    ////
    function suma(...nums){
        console.log(nums[2])  //3  //es decir esta tomando como un array
        console.log(...nums)
        return nums.reduce((a,b)=>a+b)  //suma de todos los valores: 10
    }
    
const s= suma(1,2,3,4,5,6)
console.log(s) //undefined xq no existe el return, borra el console log y cambia por return  //21


//multipliar

let variable = "hola";
function multiplicar(a=0,b=0){
    console.log(variable)
    let variableinterna="adios"  //puedo acceder a ella dentro de la funcion, no por fuera 
    return a*b
}
// console.log(variableinterna)//no esta definida, solo esta en el ambito de la funcion
console.log(multiplicar(4,9))  //36)