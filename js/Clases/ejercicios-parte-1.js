function contString(cadena = ""){
    if(!cadena){
        console.warn("No ingresaste ninguna cadena");
    }else{
        let resultado = cadena.length();
        console.log(resultado);
    }
}

contString();