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


// FUNCION CONSTRUCTORA

// Funcion constructora donde asignamos los metodos al Prototipos no a la funcion como tal
function Animal(nombre, genero){
    this.nombre = nombre;
    this.genero = genero;


}

// Metodos agregados al prototipo de la funcion constructora
Animal.prototype.sonar = function(){
    console.log("hago sonidos porque estoy vivo")
}

Animal.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`);
}

const simba = new Animal("simba",'macho'),
 coco = new Animal("coco", "hembra");

console.log(simba)
console.log(coco)

simba.saludar();

// HERENCIA PROTOTIPICA

function Perro(nombre, genero, tamanio){
    this.super = Animal;
    this.super(nombre,genero);
    this.tamanio = tamanio;
}

// perro esta herendando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

// sobreescritura de metodos del prototipo padre en el hijo
Perro.prototype.sonar = function() {
    console.log("soy un perro y mi sonido es un ladrido");
}

Perro.prototype.ladrar = function(){
    console.log("Gua gua");
}

const bubu = new Perro("bubu","hembra", "pequeño")
console.log(bubu);