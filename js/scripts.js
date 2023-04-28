function* iterable (){
    yield "hola";
    console.log("hola mundo");;
    yield "hola 2";
    console.log("seguimos con más instucciones de nuestro codigo");
    yield "hola 3";
    yield "hola 4";
}

let iterador = iterable();
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

for(let y of iterador){
    console.log(y);
}
const arr = [...iterable()];
console.log(arr);

function cuadrado(valor){
    setTimeout(() => {
        console.log({valor, resultado: valor * valor});
    }, Math.random()*1000);

    return {
        
    }
}