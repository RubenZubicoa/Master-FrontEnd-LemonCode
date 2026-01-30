// Clone
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:
function clone<T extends Object>(source: T){
    return {...source};
}
console.log(clone({name: 'Ruben', lastName: 'Zubicoa'}))

// Merge
// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, 
// y en caso de propiedades con el mismo nombre, source sobreescribe a target.
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge<T1, T2>(source:T1, target: T2): T1 & T2{
    return {...target, ...source}
}
console.log(merge(a, b))