

class Persona {
    // nombre;
    // edad;
    //private -> #
    //solo se puede acceder desde dentro de la clase 
    #nombre
    #edad
    // #obtenedad
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

    dimeNombre(){ //es una funcion getter porque nos permite acceder de forma controlada a algun atributo protegido
        return this.#nombre
    }
    #obtenedad(){
        return this.#edad
    }
    //get no deben ser ni privadas ni protegidas 
    getEdad(){
        return this.#edad
    }
    setEdad(nuevaedad){
        this.#edad=nuevaedad
    
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
// console.log(persona)

//desde fuera de la clase no quiero que puedan cambiar esto
//propiedades privadas 

// console.log(persona.dimeNombre())
//no lo podes llamar xq es privado
// console.log(persona.#obtenedad())
//tampoco se va poder acceder porq es protected 
// console.log(persona._isdev())

//GETTER Y SETTER 
//Getter --> metodos que nos permites obtener atributos o metodos privados o protegidos
//para acceder a ciertar partes de forma controlada a nuestra clase 


//dimenombre es una funcion getter xq nos permiye acceder de forma controlada a algun atributo protegido 

const edad=persona.getEdad()

console.log(edad)

const name=persona.dimeNombre()
console.log(name)

//Setter --> metodos que nos permites cambiar el valor de alguno de los atributos o metodos privados o protegidos
//quiero cambiar la edad de la persona
//creo metodo setEdad()

persona.setEdad(34)
console.log(persona.getEdad())  //34  el getter nos accede a la nueva edad cambiada


//getter y setter son metodos publicos
//porque se pueden acceder desde fuera

