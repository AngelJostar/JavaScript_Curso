// Prototipos
/*
Clases - Modelo a seguir.
Objetos - Es una instancia de una clase
    Atributos- Es una característica o propiedad del objeto (Son variables dentro de un objetos)
    Métodos - Son las acciones que un objeto puede realizar (Son funciones dentro de un objeto)

*/

// Para crear dos animales tengo que copiar y cambiar el nombre al Objeto anterior


const animal = {
    nombre: "Simba",
    sonar() {
        console.log("hago sonidos por que estoy vivo!");
    }
}

const animal2 = {
    nombre: "Coco",
    sonar() {
        console.log("hago sonidos por que estoy vivo!");
    }
}

console.log(animal);
console.log(animal2);


