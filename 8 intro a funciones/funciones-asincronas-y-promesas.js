//funciones asincronas
//cuando hacemos una llamada a una bd de datos externas puede tardar un poco de tiempo 

function miAsincrona(){
    //hace una llamada a una bd externa 
    //puede darnons algun error 

}

//promesa en js
const miPromesa = new Promise((resolve, reject)=>{

    const i=Math.floor(Math.random()*2)  //i sea entre 0y1
    //si esta todo correcto
    if(i!==0){     //si es distinto de cero 
        resolve()
    }else{
        reject()   //si es cero 
    }

    console.log(i);
})

//2 opciones 
//opcion a 
miPromesa
.then(()=>console.log("se ha ejecutado"))  //cuando se ejecute de forma correcta hace esto
.catch(()=>console.log("ERROR"))  //cuando da 0
.finally(()=>console.log("yo me ejecuto siempre"))  //se ejecuta siempre 



