

//opcion 1
const persona = {
    nombre: "Gorka",
    edad: 34,
    isdev: true,
    saludo: function () {
        console.log('hello')
    }
}

console.log(persona)
persona.saludo()

const otra_persona = {
    nombre: "Miguel",
    edad: 15,
    isdev: false,
    saludo: function () {
        console.log('Hola')
    }

}

otra_persona.saludo()


//opcion 2

//funcion factory
const creaPersona = (nombre, edad, isdev) => {
    return {
        nombre, // es igual a nombre:nombre,
        edad,//es igual a edad:edad,
        isdev,//es igual a  isdev:isdev,
        saludo: function () {
            console.log("hello")
        }
    }
}

const nueva_persona=creaPersona("Juan", 23, true)
console.log(nueva_persona)

const nueva_persona2=creaPersona("Maria", 44, false)
console.log(nueva_persona2)

//opcion 3 con clases prox video