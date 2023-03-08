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

const palindromo = (cadena="") => {
    if(!cadena) return console.warn("no ingresaste una cadena");

    cadena = cadena.toLowerCase();
    let alReves = cadena.split("").reverse().join("");

    return (cadena == alReves)
        ?console.info(`Si es palindromo, palabra original ${cadena}, palabra al revés ${alReves}`)
        :console.info(`No es palindromo, palabra original ${cadena}, palabra al revés ${alReves}`);
}

palindromo("ala")



// Ejercicio 8

const eliminacionString = (cadena="", patron="") => {
    if(!cadena) return console.warn("no ingresaste una cadena");

    if(!patron) return console.warn("no ingresaste un patron");

    let resulktado = cadena.replace(new RegExp(patron, "ig"), "");

    console.info(resulktado);
}

eliminacionString("xyz1, xyz2", "xyz");



// Ejercicio 9

const numAleatorio = () => {
        
    return console.info(Math.random() * (501 - 600) + 600);
    
}

numAleatorio();

// Ejercicio 10

const capicua = (numero = 0) => {
    if(!numero) return console.warn("No ingresaste un número");

    if(typeof numero !== "number") return console.error("no ingresaste un tipo number");

    numero = numero.toString();

    let alReves = numero.split("").reverse().join("");

    return (numero === alReves)
        ?console.info(`Si es un numero capicua`)
        :console.info(`No es un numero capicua`);
}

capicua(202)
capicua(102)

// EJERCICIO 11

const factorial = (numero = 0) => {
    if(!numero) return console.warn("No ingresaste un número");
    if(typeof numero !== "number") return console.error("no ingresaste un tipo number");

    let factorial  = 1;

    for(let i = numero; i > 1; i--){
        factorial = factorial * i
    }
    return console.info(factorial);
}

factorial(5)

// EJERCICIO 12

const esPrimo = (num=undefined) =>{
    if(!num) return console.warn("No ingresaste un número");
    if(typeof num !== "number") return console.error("no ingresaste un tipo number");
    if(num === 0) return console.error("El número no puede ser 0");
    if(num === 1) return console.error("El número no puede ser 1");
    if(Math.sign(num) === -1) return console.error("El número no puede ser negativo");

    let divisible = false;

    for(let i=2; i > num; i++){
        if(num % i === 0){
            divisible = true;
            break;
        }
    }
    return (divisible)
        ? console.info(`El número ${num} No es primo`)
        : console.info(`El número ${num} Si es primo`);
}

esPrimo(7);


// EJERCICIO 13

const impOPar = (numero) => {

    if(!numero) return console.warn("No ingresaste un número");
    if(typeof numero !== "number") return console.error("no ingresaste un tipo number");

    (numero % 2 == 0)
        ?console.info(`Es número ${numero}, es par`)
        :console.info(`El número ${numero}, es impar`);
}

impOPar(3);

// EJERCICIO 14

const convertidorGrados = (grados = undefined,tipo=undefined) => {
    if(!grados) return console.warn("No ingresaste los grados a convertir");
    if(!tipo) return console.warn("No ingresaste el tipo de grados");
    if(typeof grados !== "number") return console.error("no ingresaste un tipo number");
    if(typeof tipo !== "string") return console.error("no ingresaste un tipo string");

    if(tipo === "f"){
        console.info((grados*1.8)+32); 
    }else if(tipo === "c"){
        console.info((grados-32)/1.8);
    }else{
        console.error("no ingresaste valores correctos");
    }
    


}

convertidorGrados(120,"f")

// EJERCICIO 15

const convertirBinarioDecimal = (numero =undefined, base=undefined) => {
    if(!numero) return console.warn("No ingresaste los grados a convertir");
    if(!base) return console.warn("No ingresaste los grados a convertir");
    if(typeof numero !== "number") return console.error("no ingresaste un tipo number");
    if(typeof base !== "number") return console.error("no ingresaste un tipo number");

    if(base === 2){
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
    }else if(base == 10){ 
        return console.info(`${numero} base ${base} = ${numero.toString(base)} base 2`);
    }else{
        return console.error("el tipo de base a convertir no es valido");
    }

}

convertirBinarioDecimal(100,2)
convertirBinarioDecimal(4,10)

// EJERCICIO 16

const descuentoMonto = (numero = undefined, descuento="undefined") => {
    if(!numero) return console.warn("No ingresaste los grados a convertir");
    if(!descuento) return console.warn("No ingresaste los grados a convertir");

    if(typeof numero !== "number") return console.error("no ingresaste un tipo number");
    if(typeof descuento !== "number") return console.error("no ingresaste un tipo number");

    let resultado = (numero - ((numero * descuento)/100))
    console.info(resultado);
}

descuentoMonto(2000,10)