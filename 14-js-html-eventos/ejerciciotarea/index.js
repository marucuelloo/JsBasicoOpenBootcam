const boton = document.querySelector("#btn")

boton.addEventListener("click", ()=>{
  
    alert( "click en el botón")
 
})

// Muestra un mensaje en la consola al hacer clic en el botón utilizando jQuery
$('#btn').click(() => {
    console.log('Hola, estoy utilizando jQuery');
  });