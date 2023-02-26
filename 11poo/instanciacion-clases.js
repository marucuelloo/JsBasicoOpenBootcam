//paso 1 creamos la clase 

class Persona {
    //variables son ATRIBUTOS
    nombre;
    edad;
    isdev;1

    //metodo por defecto a la hs de crear una clase: llama los atributos de la clase 
    constructor(nombre, edad, isdev) {
        //esto es como se declaran las variables, los atributos de la clase 
        //this es palabra reservada que hace referencia al objeto en el cual esta ahora mismo 
        //al atributo nombre le estamos poniendo el valor que le asignemos con el constructor:
        this.nombre = nombre
        this.edad = edad
        this.isdev = isdev

    }
    //funciones son METODOS
    saludo() {
        //si no pongo el this, busca la varibale en el ambito de esta funcion
        //si declaro:
        let edad = 100

        //va imprimir gorka con edad 100
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${edad} años!`)
        //pero mi intension es llamar el atributo edad del objeto persona por eso debo poner this 
        //aca imprime la edad del objeto: gorka 34 
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años!`)
    }

}

//paso 2 crea el objeto que pertenece a la clase 
const nueva_persona = new Persona("Gorka", 34, true)
//new es palabra reservada q js crea un objeto, que cuando le pasamos persona, estammos creando un objeto de la clase persona 
console.log(nueva_persona)  //es un objeto de clase persona //Persona{nombre:'Gorka', edad:34 ...}

nueva_persona.saludo()

// paso 3 instanciar  clase  (no es lo mismo que inicializar)

let numero=60 //inicializadno una var 
console.log(typeof numero)

let persona2= new Persona("Maria", 44, false) //instanciar 
console.log(typeof persona2)  //object
console.log(persona2 instanceof Persona) //true si el objeto persona2 pertence a la clase persona

//instanceof -> similar al typeof pero para clase 