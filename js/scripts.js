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