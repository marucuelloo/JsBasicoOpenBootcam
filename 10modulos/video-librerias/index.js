//instalar axios para hacer llamadas a servicios externos --importantisima  
//importar axios por default 
//la manera de importalo se puede sacar de la documentacion
import axios from "axios";
axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
//npm start en la consola y me da ls datos de ditto
//si le pongo un nombre de pokemon que noes me da error 
//axios.get('https://pokeapi.co/api/v2/pokemon/maru')


  .then(function (response) {
    // handle success
    console.log("Sucess!!!");
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log("error!");
    console.log(error); 
  })
//   .finally(function () {
//     // always executed
//   });

