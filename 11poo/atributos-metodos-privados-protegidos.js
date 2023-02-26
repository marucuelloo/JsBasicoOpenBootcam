

class Persona {
    // nombre;
    // edad;
    //private -> #
    //solo se puede acceder desde dentro de la clase 
    #nombre
    #edad
    #obtenedad
//protected 
//solo se puede acceder desde dentro de la clase y desde clases descendientes 
_isdev = true

    constructor(nom, edad) {
        this.#nombre= nom
        this.#edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años!`)
    }

    dimeNombre(){
        return this.#nombre
    }
    #obtenedad(){
        return this.#edad
    }


}
const persona = new Persona("Maru", 70)

//si la var es privada no se van a a leer
// console.log(persona)
// console.log(persona.nombre)
persona.saludo()
//quiere decir que tengo como objeto persona mas opciones por formar parte de la clase Persona (obtuve el saludo)


//nombre es publico
persona.nombre = "adios"
console.log(persona)

//desde fuera de la clase no quiero que puedan cambiar esto
//propiedades privadas 

console.log(persona.dimeNombre())
//no lo podes llamar xq es privado
// console.log(persona.#obtenedad())
//tampoco se va poder acceder porq es protected 
// console.log(persona._isdev())

