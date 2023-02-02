
const logger = require('./logger')  


//cambia el console por logger
// logger.log("Hola estoy saliendo por pantalla")
logger.info("Hola esto es un mensaje informativo")
logger.debug("Hola esto es un mensaje de debug")
logger.warn("Hola esto es un mensaje de advertencia")
logger.error("Hola esto es un error")

//npm install winston - para crear el node module, 
//se crea el index.js 
//npm start y crea 2 archivos con errores 

