let temporizador = setTimeout(() => {
    console.log("esto se ejecuta un vez");
}, 1000);


let interval = setInterval(() => {
   console.log(new Date().toLocaleTimeString());
}, 1000);

// esto cancela un timeout
clearTimeout(temporizador);
// esto cancela un interval
clearInterval(interval);