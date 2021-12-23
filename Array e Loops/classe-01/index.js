const numeros = [2, 3, 4, 6];
let soma = 0;

/*const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(numeros.reduce(reducer)); */

for (let i = 0; i <= numeros.length - 1; i++) {
  soma += numeros[i];
}
console.log(soma);
