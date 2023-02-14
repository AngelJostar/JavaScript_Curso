
// ARREGLOS


// ¿COMO DECLARAMOS UN ARREGLO?

// Forma tradicional
const a = [1,2,"hola", ["A","B","C"]]
console.log(a);

// Otra forma 

const b = Array.of("X","Y","Z",9,8,7)
console.log(b);

// para crear arreglos de cierto tipo

const c = Array(100).fill(false)
console.log(c);

// forma viejita ya nadie la usa
const e = new Array();


// EJEMPLO DE COMO AGREGAR y QUITAR ELEMENTOS ELEMENTOS

const colores = ["Rojo","verde","azul"]
colores.push("Negro");
console.log(colores);
colores.pop();
console.log(colores);

colores.forEach(function(el,index) {
    console.log(`<li id="${index}">${el}</li>`);
})