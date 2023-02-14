// BREAK AND CONTINUE

const numeros = [1,2,3,4,5,6,7,8];

// el break rompre el ciclo 

for (let i=0; i < numeros.length; i++){
    if(i === 5){
        break;
    }
    console.log(numeros[i]);
}

// El continue solo se salta la ejecución de codigo de esa parte del ciclo
for (let i=0; i < numeros.length; i++){
    if(i === 5){
        continue;
    }
    console.log(numeros[i]);
}