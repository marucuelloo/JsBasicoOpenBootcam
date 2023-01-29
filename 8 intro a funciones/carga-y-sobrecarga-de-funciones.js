//carga y sobrecarga de funciones
function saludar(){
    hola()
}
function hola(){
    console.log("hola, soy la funcion hola()")
}
saludar()


//carga de funciones:
//1. cargar la funcion global()
//2. saludar() global()
//3.hola() saludar() global()
//4. quita hola de la carga  saludar() global()
//5. global()

// //overflow-sobrecarga
// //sucede en funcines recursivas:
// function recursivo(){
//     recursivo()
// }
// recursivo()