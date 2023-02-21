// arrow function

const saludar = () => {
    console.log("hola");
}

// si tiene una sola linea de codigo

// const saludar = () => console.log("hola");

// CON PARAMETROS

const hello = (nombre) => console.log(`Hola ${nombre}`);

// si recibe parametros ni hace falta el parentesis claro mientra sea de una sola linea

// const hello = nombre => console.log(`Hola ${nombre}`);

saludar();

hello("Angel")


// EJEMPLO 2

// Sin arrow function

// const sumar = function (a,b) {
//     return a + b
// }
// console.log(sumar(8,9));

// Las arrow function tiene el return implicito solo cuando es una linea


const sumar = (a,b) => a + b;
console.log(sumar(2,4));


// EJEMPLO 3

const sumadorDeNumero = (a) => {
    for (let i = 0; i < a; i++) {
        let s = a*(a+1)/2;
        console.log(s);
    }
}

sumadorDeNumero(3)

// Las Arrow function tienen la capacidad de capturar el contexto del objeto en el que se encuentran

// Por eso hay que tener cuidado con usar arrow function dentro de objetos literales

const perro = {
    nombre: "bubu",
    ladrar: () => {
        console.log(this);
    }
}

