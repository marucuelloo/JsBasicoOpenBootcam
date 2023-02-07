////////////////otro video aprendienod promesas: callbacks vs promises 
//https://www.youtube.com/watch?v=frm0CHyeSbE
//pasar una funcion como parametro: en reailidad esto es un callback
//mandar de vuelta la llamda con la inf que calculo
//op es una funcion 
const operacion = (num1, num2, op) => {
    return op(num1, num2)
}
//funcion con 2 param>1 y 3, y luego una funcion que recibe 2 param(a,b) y los suma, multiplica, etc
console.log(operacion(1, 3, (a, b) => a + b))  //4
operacion(1, 3, (a, b) => a * b)
operacion(1, 3, (a, b) => a - b)

//seria lo mismo que
const operacion2 = (num3, num4, callback) => {
    return setTimeout(() => {
        callback(num3, num4)
    }, 500)
}
operacion2(1, 3, (a, b) => {
    console.log(a + b) //4 
})
//callback no funciona si lo pones adelante al parametro

//diferencia callback y promise 

const doAsynctuffWithCallback = (num1, num2, callback) => {
    const re = num1 + num2
    return setTimeout(() => {
        callback(re)
    }, 500)
}

const doAsynctuffWithPromises = (num1, num2) => {
    const resultado = num1 + num2
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(resultado)
        }, 500)  //resolve, para resolver // reject si tenemos un problema 

    })

}
doAsynctuffWithCallback(1, 3, (result) => {
    console.log(result)
})
doAsynctuffWithPromises(1,3)
.then(result=>console.log(result))

//promesas 

function miPromesa(){
    return new Promise(function(resolve, reject){
        let suma=2+6
        if(suma==8){
            resolve("es correcto")
        }else{
            reject("es incorrecto")
        }
    })
}
//el metodo .then se encuentra vinculado con resolve
miPromesa().then(function(mensaje){
    console.log(mensaje)
}). catch(function(error){
    console.log(error)
})



function miPromesa2(){
    return new Promise(function(resolve, reject){
        let isHomeworkDone=true
        if(isHomeworkDone===true){
            let cel={
                color:"negro",
                marca: "samsung"
            }
            resolve(cel)
        }else{
            reject("no obtuviste un Samgung")
        }
    })
}
miPromesa2().then(function(mensaje){
    console.log(mensaje)  //{color:'negro', marca: 'samsung'}
}). catch(function(error){
    console.log(error)
})

//tb podemos retornar una promesa desp de otra promesa 

function mostrarCel(mensaje){   //esto es otra promesa 
    return new Promise(function(resolve, reject){
        if(mensaje){
            resolve("obtuviste un "+ mensaje.marca)
        }else{
            reject("error")
        }

    })
}


miPromesa2().then(function(mensaje){
return mostrarCel(mensaje)
}).then(function(respuesta){
    console.log(respuesta)   //Obtuviste un Samgung 
}).catch(function(error){
    console.log("error")

})

//https://www.youtube.com/watch?v=pHBmmbDQl0o