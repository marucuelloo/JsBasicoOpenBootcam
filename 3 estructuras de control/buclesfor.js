//BUCLES FOR
//mas usados 

/*
for(inicializacion; condicion; actualizacion){
    //esto es el bucle {}
}
     //se va ejecutar mientras se cumple la condicion
    //luego del ultimo bucle se ejcuta la actualizacion*/

// i=i+1
// i +=1
// i++
for(let i=0; i<10; i=i+2){
    console.log(i);
}
let lista = [ 1, 4, 6, 2, 3, 7, 10, 12];
//lenght es atributo para que tome la cantidad de caracteres de la lista
for (let i = 0; i<lista.length;i++){
    console.log(lista[i]*2)
}

//ESTRUCTURA FOR ...OF

for (let valor of lista){
    console.log(valor);
    console.log(valor*2);
}

//ESTRUCTURA forEach 

lista.forEach(valor=>{
console.log(valor)  
})


//EESTRUCTURA FOR ...IN

let persona = {
    nombre: "Maru",
    apellido: "Cuello",
    edad: 34,
    isDev: false
}

console.log(persona.nombre)

let prop ="edad";
console.log(persona[prop])


for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona)

    console.log(persona[propiedad])


}

