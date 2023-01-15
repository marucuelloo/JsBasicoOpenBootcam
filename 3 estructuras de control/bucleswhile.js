//Bucles While
let i=0;
let max=10;

while(i<max){
    console.log(i);
    i++;  //tener cuidado con no haces whiles infinitos, aca lo coloco que vaya aumentando 
}

//do ...While 
//la diferencia es que la primera vez siempre se va ejecutar 
i=15;
do{
    console.log("estoy en el do while ")
}while(i<max){
    console.log(i);
    i++;
}

