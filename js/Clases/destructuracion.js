// DESTRUCTURACIÓN

const numeros = [1,2,3];

// Esto seria sin destruración

let uno = numeros[0], 
    dos = numeros[1],
    tres = numeros[2];

console.log(uno,dos,tres);

// Con destructuración

const [one,two,three] = numeros;

console.log(one,two,three);

// EJEMPLO 2

const persona = {
    nombre: "Luis",
    apellido: "Rojas",
    edad: 24
}

let {nombre, apellido, edad} = persona ;

console.log(nombre, apellido, edad);