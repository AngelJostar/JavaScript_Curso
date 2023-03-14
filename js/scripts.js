//  ASINCROIA

// JAVASCRIPT trabaja bajo un modelo asincrono y no bloqueante y tiene un flojo de operaciones de un solo thread
// para entrada y salida

// Concurrencia
// la concurrecia es cuando dos o mas tareas progresan simultaneamente

// el paralelismo
// Es cuando dos o mas tareas se ejecutan al mismo tiempo (al unisono)

// una operación bloqueando es aquella que no va a devolver control  a la aplicacion hasta que 
// haya terminado toda su tarea.

// asíncrono
// significa que la respuesta sucede en el presente en un tiempo inmediato

// asíncrono
// significa que la respuesta sucede en un futuro


// Codigo síncrono bloqueante

(()=>{
    console.log("Código Síncrono");
    console.log("Inicio");

    function dos(){
        console.log("Dos");
    }

    function uno(){
        console.log("Uno");
        dos();
        console.log("tres");
    }

    uno();
    console.log("fin");
})();

// Código Asíncrono no Bloqueante

(()=>{

})();
