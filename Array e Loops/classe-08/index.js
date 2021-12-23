const numeros = [3, 24, 1, 8, 7, 15];
let maiorNum = numeros[0];

for (let i of numeros) {
  if (i > maiorNum) {
    maiorNum = i;
  }
}
console.log(maiorNum);
