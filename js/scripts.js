// POXIS

 const persona = {
    nombre:"",
    apellido:"",
    edad:0
 }


 const manejador = {
    set(obj,prop,valor){
        obj[prop] = valor;
    }
 }

 const jon = new Proxy(persona,manejador);
 jon.nombre = "Join";
 jon.apellido = "Mircha";
 jon.edad = 35;

 console.log(jon);