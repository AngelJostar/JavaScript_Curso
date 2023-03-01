export const PI = Math.PI;

let usuario = "Luis";
let password = "kirito321";


// solamente podemos tener una exportacion default y si quremos exportar variables, debemos hacerlo
// despues de la deraclacion

export default function saludar() { 
    console.log("hola modulos +ES6");
}

export  class Saludar{
    constructor(){
        console.log("hola modulos +ES6");
    }
}