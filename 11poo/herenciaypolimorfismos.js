//Inheritance - Herencia
// class Desarrollador{
//     //la clase desarrollador tenga las caract de la clase persona
//     constructor(nom, edad) {
//         this.nombre= nom
//         this.edad = edad
//     }

//     saludo() {
//         console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años!`)
//     }


//     saludoDesarrollador(){

//     }

// }

//ESTO NO ES EFICIENTE, SE HACE:
class Persona {
    //la clase desarrollador tenga las caract de la clase persona
    //definir las variables de formaa protegida 
    //no somos capaces de acceder a estar varibales por fuera de estas clases 
    _nombre
    _edad
    constructor(nombre, edad) {
        this._nombre = nombre
        this._edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años!`)
    }

}
class Desarrollador extends Persona {
    //tiene herencia de persona -> extends
    constructor(nombre, edad, lenguaje){
        // this.nombre=nombre
        // this.edad=edad  
        //esto no se puede hacer xq la clase padre ya tiene un constructor con nombre y edad, lo que se hace es:
        //la palabra super con nombre y edad de la clase padre 
        super(nombre, edad)
        this.lenguaje=lenguaje


    }
    //definir nuevamente el metodo saludo
    //estamos reescribiendo la definicion del metodo saludo 
    saludo(){  //Override (volver a definir algo que ya estaba definido)
        //pero tambien podemos acceder al saludo originario
        super.saludo()
        // console.log('Hola soy desarrollador')
        console.log(`Y soy Desarrollador de ${this.lenguaje} `)
    }

}
const nuevodev = new Desarrollador("Maru", 34, "Js")
console.log(nuevodev)

nuevodev.saludo()

//que pasa si quiero que el saludo sea de otra manera,
//que agregue el lenguaje en el saludo
//se usa 
//Polimorfismo
// que es varias formas
//las clases pueden tomar diferentes formas 

