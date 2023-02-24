// CLASES

class Animal {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    sonar() {
        console.log("Hago sonidos porque estoy vivo");
    }
}

// const mimi = new Animal("Mimi", "Hembra"), scooby = new Animal("Scooby","Macho");

// console.log(mimi);
// mimi.sonar();


class Perro extends Animal {
    constructor(nombre, genero, tamanio) {
        // Super manda a llamar el constructor de la clase padre
        super(nombre, genero);
        this.tamanio = tamanio;
        this.raza = null
    }

    sonar() {
        console.log("Soy un perro y mi sonido es un ladrido");
    }

    ladrar() {
        console.log("Guauu guaaau");
    }

    // un metodo estatico se puede ejecutar sin necesidad de instanciar la clase

    static queEres() {
        console.log("Los perros somos pulgosos");
    }

    // Los setters y getters son metodos especiales 
    // que nos permiten establecer y obtener los valores de atributos 
    // de nuestra clase

    get getRaza(){
        return this.raza;
    }

    set setRaza(raza){
        this.raza = raza;
    }

}



const mimi = new Animal("Mimi", "Hembra"), scooby = new Perro("Scooby", "Macho", "Gigante");
console.log(scooby);
scooby.ladrar()


Perro.queEres()
console.log(scooby.getRaza);
scooby.setRaza = "Gran Danes";
console.log(scooby.getRaza);