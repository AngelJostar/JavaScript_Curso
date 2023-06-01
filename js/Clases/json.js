let json = {
    "cadena": "jon",
    "numero":35,
    "booleano": true,
    "arreglo": [
        "correr",
        "programar",
        "cocinar"
    ],
    "objeto": {
        "twitter": "@AngelRojas",
        "email": "angelrojas.ciencias@gmail.com"
    },
    "nulo":null
}

// analiza una cadena de texto como JSON, transformando opcionalmene el valor producido por al analisis
console.log(JSON.parse("{}"))
console.log(JSON.parse("[1,2,3]"))
console.log(JSON.parse("true"))
console.log(JSON.parse("1234"))
// Metodo stringify

// convierte un objeto o valor de JavaScript en una cadena de texto JSON, opcionalmente 
// reemplaza valores si se indica una función de reemplazo, o si se especifican las propiedades 
// mediante un array de reemplazo.

console.log(JSON.stringify("{}"))
console.log(JSON.stringify("[1,2,3]"))
console.log(JSON.stringify("true"))
console.log(JSON.stringify("1234"))
console.log(JSON.stringify({x:2,y:3}))
console.log(JSON.stringify(json))