// ITERABLES % ITERATORS

const iterable = [1,2,3,4]; 
// const iterable ="Hola mundo";
// const iterable = new Set([1,2,33,3,4,5]);
// const iterable = new Map(["nombre","jon"],["edad",35])



// accedemos al iterador de nuestros iterable
const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);
console.log(iterador.next());

let next = iterador.next();
while(!next.done){
    console.log(next.value);
    next = iterador.next();
}

