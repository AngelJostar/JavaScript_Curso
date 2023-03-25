// CALLBACKS

// Es una funcion que se va a ejecutar despues de que otra lo haga

function cuadradoCallBack(value, callback){
    setTimeout(()=>{
        callback(value,value*value);
    },0|Math.random()*100)
}

cuadradoCallBack(0,(value, result)=>{{
    console.log("inicia callback");
    console.log(`Callback: ${value}, ${result}`);
}})