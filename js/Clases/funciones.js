

// Funciones declaradas

funcionDeclarada();

function funcionDeclarada(){
    console.log("Esto es una función declarada, puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada");
}

funcionDeclarada();

// Estas son una mejor practica
// Funciones expresadas

// función anónima

// funcionExpresada(); <--- Esto no se puede hacer

const funcionExpresada = function() {
    console.log("Esto es  una función expresada, es decir, un función que se le ha asignado como valor a una variable, si invocamos esta función antes de su definición JS nos dirá Cannot access 'funcionExpresada' before initialization' ");
}


funcionExpresada();


