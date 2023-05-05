const f=document.getElementById("formulario")
console.log(f)


// cada vez q ejecutes el submit quiero que ejecutes esta function
// que tiene como parametreo el evento
f.addEventListener("submit", evento=>{
console.log(evento)
evento.preventDefault()
// que evite que se ejecute el comprtamiento por defecto de submit, que es redirgirme a otro lado, para que no me de el error
})
