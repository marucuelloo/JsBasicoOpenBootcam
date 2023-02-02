//forma de importar modulos dentro de node 
const winston = require('winston');

const logger = winston.createLogger({  //objeto que permite gestionar los errores 
    level: 'error',     // va hacer caso a niveles que esten iguales o por debajo de info(0,1y2 - luego tb 3 4 5) (y me agrega los errores en combined.log)
    format: winston.format.json(),
    // defaultMeta: { service: 'user-service' },
    transports: [  //todas las acciones que se van a ejecutar cada vez que haya un log 
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});


//exportar este objeto
//poner a disposicion de todo el proyecto, este objeto 
module.exports=logger;


//nivel de errores. doc de winston
// const levels = {
//     error: 0,
//     warn: 1,
//     info: 2,
//     http: 3,
//     verbose: 4,
//     debug: 5,
//     silly: 6
//   };