const htexto=document.getElementById("h-texto")
console.log(htexto)


// h-texto quiero vincularlo a un evento que se llama cambiotexto y a una funcion
//  callback que se ejecuta cuando se ejeucta el evento cambiotexto
htexto.addEventListener("cambiotexto", evento=>{
    console.log(evento.detail)
    //cambiamos el texto y el color :
    htexto.innerText = evento.detail.texto
    htexto.style.color = evento.detail.color
})

function cambiarTexto(nuevotexto, color){
    // voy a crear un nuevo evento y guardarlo en la constante evento. 
    //tiene 2 parametros, nombre del evento y yn objeto con un atributo donde le paso todo lo que yo quiero 
const evento= new CustomEvent("cambiotexto", {
    detail:{
        texto: nuevotexto,
        color
    }
})
// cuando se llame a la funcion cambiarTexto, el evento aparte de crearse, se lanse
//sobre htexto quiero lanzar un evento 
htexto.dispatchEvent(evento)
}