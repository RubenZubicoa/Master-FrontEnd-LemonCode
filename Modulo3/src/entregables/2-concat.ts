// Concat
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

const concat = <T1,T2>(array1: T1[], array2: T2[]): (T1 | T2)[] => {
    return [...array1, ...array2];
}
console.log(concat([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));

// Opcional
// Implementa una nueva versión de concat donde se acepten múltiples arrays de entrada (más de 2). No utilices el método Array.prototype.concat.
const concatOpcional = <T>(...args: T[]) => {
    return args.flat()
}
console.log(concatOpcional([1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]));