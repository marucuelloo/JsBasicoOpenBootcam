const boton = document.querySelector("#btn")
console.log(boton)

boton.addEventListener("click", ()=>{
    //cuenta los click en la consola
    // console.log("click")
    // que al hacer click emita un alert
    // alert("se ha hecho click")
    //confirm: pasar msj x pantalla y pide aceptar o cancelar
    //si es true devuelve el ok en consola si es false no devuelve nada 
    // confirm("estas de acuerdo?")&& console.log("OK")
    // //operador ternario- para tener en cuenta la rta true y false - es mejor que if and else 
    confirm("estas de acuerdo?") ? console.log("ok") : console.log("no!!")

    //otra manera de hacerlo:

    // const respuesta = confirm ("¿seguro?")
    // if(respuesta){
    //     console.log("estas de acuerdo")
    // }else{
    //     console.log("no estas de acuerdo")
    // }

})


const info = document.querySelector("#info")
info.addEventListener("click", ()=>{
   const nombre= prompt("cual es tu nombre?")

   if(nombre){
    console.log ("tu nombre es " +  nombre)
   }else{
    console.log ("no introduciste nada  " )
   }

})


const lista =[{
    nombre: "Maru",
    edad:34
},
{
    nombre: "jonas",
    edad:5
},
{
    nombre: "Gas",
    edad:34
}]
// console.log(lista)
//una forma para que te la informacion en una tabla
console.table(lista)