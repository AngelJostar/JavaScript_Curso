// OBJETOS LITERALES


let nombre = "simba",
edad = 2;

// sin los añadidos de los objetos literales

const gato = {
    nombre: nombre,
    edad: edad,
    maullar: function(){
        console.log("miauu miauu!!");
    }
}

console.log(gato);
gato.maullar();

// con los añadidos de lso objetos literales

const cat = {
    nombre,
    edad,
    raza: "Siames",
    maullar (){
        console.log("miauu miauu miauu!!");
    }
}

console.log(cat);
cat.maullar();


