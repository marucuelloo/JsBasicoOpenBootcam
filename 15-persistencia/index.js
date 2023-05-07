//localstorage - vemos los datos en la consola. en la pestaña aplicacion -local storage 
localStorage.setItem("nombre", "maru")
// localStorage.setItem("nombre", "jonas")

console.log(localStorage.getItem("nombre"))
//para que se visualice en la consola los datos del objeto se debe agregar json.stringify=> se visualiza como string
//JSON.stringify =>convierte objeto, array en string
localStorage.setItem("persona", JSON.stringify({ nombre: "maru", edad: 34 }))
// console.log(localStorage.getItem("persona"))

//para obtenerlo en modo objeto 
//JSON.parse=> convierte un objeto array convertido a travez de stringify en un objeto de js 
// console.log(JSON.parse(localStorage.getItem("persona")))


//como podemos eliminar un item del localstorage
localStorage.removeItem("nombre")


//sessionstorage vemos los datos en la consola. en la pestaña aplicacion - sesion storage 
sessionStorage.setItem("nombre-sesion", "Gaston")


//cookies 
//tienen otra forma de trabajar y no es tan visual 
document.cookie="nombrecookie=marucookie"
//coomo le damos caducidad a la cookie:
document.cookie="nombrecaducidad=nombre;expires=" + new Date(2024,0,1).toUTCString()

console.log(document.cookie)