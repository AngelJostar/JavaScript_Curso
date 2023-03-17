// Symbols


// let id = "hola";
// let id2 = "hola";

// console.log(id === id2);
// Symbol crea identificadores unicos

let id = Symbol("hola");
let id2 = Symbol("hola");

console.log(id === id2);

const NOMBRE = Symbol();
const SALUDAR = Symbol();

const persona = {
    [NOMBRE]: "Jon"
}


console.log(persona);

persona.NOMBRE = "Luis Angel Rojas"
console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);

persona[SALUDAR] = function(){
    console.log(`hola`);
}

console.log(persona);
persona[SALUDAR]();

// los Symbol no se van a listar como una propiedad publica

for(let propiedad in persona){
    console.log(propiedad);
}

console.log(Object.getOwnPropertySymbols(persona));