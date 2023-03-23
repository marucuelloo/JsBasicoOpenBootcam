const htexto=document.getElementById("h-texto")
console.log(htexto)

htexto.addEventListener("cambiotexto", evento=>{
    console.log(evento)
})

function cambiarTexto(nuevotexto, color){
const evento= new CustomEvent("cambiartexto", {
    detail:{
        texto: nuevotexto,
        color
    }
})

htexto.dispatchEvent(evento)
}