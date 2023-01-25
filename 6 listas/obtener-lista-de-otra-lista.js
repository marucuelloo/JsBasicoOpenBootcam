//como obtener una lista a partir de otra .slice()
//slice en ingles son como una porcion

const array = ["hola",1, 2, 3, true, null, "adios"]

//. slice NO MODIFICA EL VALOR DEL ARRAY ORIGINAL 
//4 no lo toma 
//primero de q inidice queremos que empiece y hasta donde, el ultimo valor no lo toma 
console.log(array.slice(1, 4)); //[1, 2, 3]

const array2= array.slice(2, 5);
console.log(array2); //[2, 3, true]


//arranca del indice 2 y al final le resta 2 
const array3=array.slice(2, -2);
console.log(array3); //[2, 3, true]