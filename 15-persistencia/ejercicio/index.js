let nombre = 'Marianela';
let apellido = 'Cuello';
let miObjeto = { nombre: nombre, apellido: apellido };

// Almacenar el objeto en la SessionStorage
sessionStorage.setItem('miObjeto', JSON.stringify(miObjeto));

// Almacenar el objeto en la LocalStorage
localStorage.setItem('miObjeto', JSON.stringify(miObjeto));

// Crear una cookie con una duración de 2 minutos
let expirationDate = new Date(Date.now() + 1200); // 120000 milisegundos = 2 minutos
let cookieValue = JSON.stringify(miObjeto);
document.cookie = `miObjeto=${cookieValue};expires=${expirationDate.toUTCString()}`;

//cookie
//	{"nombre":"Marianela","apellido":"Cuello"}	127.0.0.1	/15-persistencia/ejercicio	2023-05-07T21:45:05.000Z	50					Medium
// //localstorage
// {nombre: "Marianela", apellido: "Cuello"}
// apellido
// : 
// "Cuello"
// nombre
// : 
// "Marianela"
//sessionstorage 
// {nombre: "Marianela", apellido: "Cuello"}
// apellido
// : 
// "Cuello"
// nombre
// : 
// "Marianela"