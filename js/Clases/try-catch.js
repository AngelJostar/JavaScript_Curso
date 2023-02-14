// MANEJO DE ERRORES TRY CACTH

try{
    console.log("En el Try se agrega el codigo a evaluar");
    noExiste;
    console.log("segundo mensaje del try");
}catch(error){
    console.log("Catch, captura cualquier error surgido o lanzado en el try");
} finally{
    console.log("En el finally se ejecutara siempre al final de un bloque catch");
}


// Ejemplo 2


try{
 
    let numero = "hola";
    if(isNaN(numero)){
        throw new Error("El carácter introducido no es un Número")
    }

    console.log(numero * numero);
}catch(error){
    console.log(`Se produjo el siguiente error ${error}`);
} 