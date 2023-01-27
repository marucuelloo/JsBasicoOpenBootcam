//que son las funciones, como se declaran y como se utilizan
//son bloques de codigo que se ejcutan con fin especifico 
//ej funcion saludar
//declarar funcion:
/*
saludar(2, "adios", false)
function saludar(parametro1, parametro2, parametro3){
    console.log("Hola")
}*/

//el parametro es nombre, le paso que en nombre quiero que diga maru y salude al parametro
saludar("Maru")

const nom="Maru2"
saludar(nom)


function saludar(nombre){
    console.log(`Hola ${nombre}`)
}

    //creo una nueva funcion
let nombre2="Gas"
console.log(nombre2);

    function despedir(nombre2){
        nombre2="Jonas"
        console.log(`Adios ${nombre2}`)
    
    }

    //por mas que cambie el valor dentro de la funcion (q no se porque no me imprime en el quoka), por fuera nombre2=Gas

    /////////////////

    //1- creo un objeto con 2 prop
    let persona ={nombre: "Pepe", apellido: "Gonzalez"} 
//3- llamo la funcion que cree y el objeto que quiero llamar 
saludarPersona(persona)
console.log(persona)
 //2- creo una funcion para saludar que llame las prop del objeto
function saludarPersona(objeto){
    objeto.apellido="Villar"  //aca que cambio el apellido, se modifica dentro y fuera de la funcion 
        console.log(`Hola ${objeto.nombre}  ${objeto.apellido}`)

    }


