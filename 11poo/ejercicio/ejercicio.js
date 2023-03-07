class Estudiante {
    constructor(nombre) {
        this.nombre = nombre;
        this.asignaturas = ['Javascript', 'HTML', 'CSS'];
    }

    obtenDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        };
    }
}

const nuevoEstudiante = new Estudiante('Marianela');

console.log(nuevoEstudiante.obtenDatos());