const contString = (cadena = "") => {
    if(!cadena){
        console.warn("No ingresaste ninguna cadena");
    }else{
        let resultado = cadena.length;
        console.info(`La cadena ${cadena} tiene ${resultado} caracteres`);
    }
    
}

// version bonita

const contarCaracteres = (cadena = "") => 
    (!cadena)
        ?console.warn("No ingresaste ninguna cadena")
        :console.info(`La cadena ${cadena} tiene ${cadena.length} caracteres`);

contString("hola");


// Ejercicio 2
const cutString = (cadena = "", indice = undefined) => {
    if(cadena == "" || indice === undefined){
        console.warn("No ingresaste completos los campos");
    }else{
        console.log(cadena.slice(0,indice));
    }
}

const cutString2 = (cadena = "", indice = undefined) => 
    (!cadena)
        ?console.warn("No ingresaste una cadena de texto")
        :(indice === undefined)
            ?console.warn("No ingresaste la logitud para recortar el texto")
            :console.info(cadena.slice(0,indice))

cutString("hola como estan", 8)
cutString2("hola como estan", 8)

// Ejercicio 3

const cadenaAArreglo = (cadena="", separador =undefined) => {
    if(!cadena){
        console.warn("No ingresaste una cadena de texto")
    } else{
        if(separador === undefined){
            console.warn("No ingresaste el caracter separador")
        }else{
            console.info(cadena.split(separador));
        }
    }
}


const cadenaAArreglo2 = (cadena="",separador = undefined) => 
    (!cadena)
        ?console.warn("No ingresaste una cadena de texto")
        :(separador === undefined)
            ? console.warn("No ingresaste el caracter separador")
            :console.info(cadena.split(separador));


cadenaAArreglo("Hola mundo como estan?", " ")
cadenaAArreglo2("Hola mundo como estan?", " ")

// Ejercicio 4

const repiteString = (cadena="", numero = undefined) => {
    if(!cadena) return console.warn("no ingresaste una cadena");

    if(numero === undefined) return console.warn("No ingresaste el número de veces a repetir el texto");

    if(numero === 0 ) return console.error("El numero de veces no puede ser 0");

    if(Math.sign(numero) === -1) return console.error("EL numero de veces no puede ser negativo");

    for(let i=0; i <= numero; i++) console.info(`${cadena},${i}`);
    
}

repiteString("hola",5)

// EJERCICIO 5

const invertirString = (cadena = "") => {
    let nuevaCadena = "";
    if(!cadena) return console.warn("no ingresaste una cadena");

    for(let i = cadena.length - 1; i >= 0; i--){
        nuevaCadena += cadena[i];
    }
    console.info(nuevaCadena);
}

const invertirCadena = (cadena) => 
    (!cadena)
        ?console.warn("No ingresaste una cadena de texto")
        :console.info(cadena.split("").reverse().join(""));


invertirString("hola")
invertirCadena("Hola");


// Ejercicio 6

const contarString = (cadena="",texto="") => {
    
    if(!cadena) return console.warn("no ingresaste una cadena");
    if(!texto) return console.warn("no ingresaste una palabra a buscar");

    let i = 0,
        contador = 0;
    
    while (i !== -1) {
        i = cadena.indexOf(texto, i);
        if(i !== -1){
            i++;
            contador++;
        }
    }

    return console.info(`La palabra ${texto} se repite ${contador} veces`);;
}

contarString("hola mis amigos", "hola")
 
// Ejercicio 7

const palindromo = (cadena) => {
    if(!cadena) return console.warn("no ingresaste una cadena");

    console.log(cadena.split("").reverse().join(""));
}

palindromo("ala")

