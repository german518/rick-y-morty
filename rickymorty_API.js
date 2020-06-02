/**********************************/
//  ejercicio API rick y morty     / 





//declaramos las constantes para pedir a la api

const URL = "https://rickandmortyapi.com/api";

const CARACTER = "/character/:id";

//creamos la funcion personaje, que nos va arrojar la info deseada y explicita

const PERSONAJE = function(personaje){

document.write(`hola soy ${personaje.name} mi especie es ${personaje.species} y soy del planeta ${personaje.origin.name}`);

}


function llamaPersonaje(entrada1) {

 //pedimos al usuario ingresar un id
var entrada1= Number(prompt('ìngresa un codigo para conocer tu personaje'));

//validacion para asegurarnos de que ingresan 
if (entrada1 <1 || entrada1>591) {
    alert ('ingresa un id valido')
} else {
    const ACTOR1 = `${URL}${CARACTER.replace(":id", entrada1)}`;

    $.get(ACTOR1, PERSONAJE);
    
    };

}
//invocamos la funcion

llamaPersonaje();