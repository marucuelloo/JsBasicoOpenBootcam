//funciones generadoras
//sintaxis distintas 
//genera id incremental 
function* generaId(){
    let id=0;
    while(true){
        id++
        
        if(id===10){
            return id
        }
        yield id   // esperando a que se vuelva a llamar  --cada vez q llamemos la funcion nos envia un nro y se queda parado. es un return pero en lugar de salir del funcion se qued ahasta que lo vuelven a llamar
    }
}

const generadora =generaId();
console.log(generadora.next().value)  //nos devuelve un objeto, que si le ponemos value da el valor, no todo el objeto
console.log(generadora.next().value)
console.log(generadora.next())
console.log(generadora.next())
console.log(generadora.next())
console.log(generadora.next())
console.log(generadora.next())
console.log(generadora.next())
console.log(generadora.next())
console.log(generadora.next())
console.log(generadora.next())
console.log(generadora.next())