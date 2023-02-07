//ejercicios 
//https://www.youtube.com/playlist?list=PLQXztHlVkktmpm-qMfx-MTL_Dn-j47FkK
//video 12. 3 ejercicios

//crear una funcion que sea aviso lluvia, que tenga un parametro: esta lloviendo(booleano)
//si esta loviendo,imprime: esta lloviendo y sino no esta lloviendo

function avisoLluvia(estaLloviendo){
    if(estaLloviendo){
        console.log("esta lloviendo")
    }else{
        console.log("no esta lloviendo")
    }

}
// avisoLluvia(true); 
avisoLluvia(false); 


//crear una funcion que sea calcular 
//3 parametros x, y, z 
//el resultado que retorne la funcion x+y=resultado*z


function calcular(x,y,z){
    return console.log((x+y)*z)
}

calcular(1,1,2)  //4
calcular(2,2,2)  //8
calcular(3,3,2)  //12
calcular(2,3,3)  //15



//hacer funcion calculadora
//3 parametros: un string llamado operacion y 2 numeros llamados x ey 

//si el valor de operaciones... devolvemos... :
//suma - los sumamos
//resta - los restamos
//multiplicacion - 
//division -
//exponenciacion - primero elevado al segundó
//residuo - residuo de dividir prim con seg
//en cualquier otro caso -1

function calculadora(operacion, x, y){
    if(operacion=="suma"){
        return x+y
    }else if(operacion=="resta"){
        return x-y
    }else if(operacion=="multiplicacion"){
        return x*y
    }else if(operacion=="division"){
        return x/y
    }else if(operacion=="exponenciacion"){
        return x**y
    }else if(operacion=="residuo"){
        return x%y
    }else{
        return -1
    }

}

console.log(calculadora("residuo", 2, 4)) //2
console.log(calculadora("suma", 2, 4)) //6
console.log(calculadora("resta", 2, 4)) //-2
console.log(calculadora("division", 2, 4)) //0.5
console.log(calculadora("multiplicacion", 2, 4)) //8
console.log(calculadora("exponenciacion", 2, 4)) //16
console.log(calculadora("calculadora", 2, 4)) //-1


