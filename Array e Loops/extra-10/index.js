const numeros = [8, 11, 4, 1];
let maiorNum = numeros[0];
let menorNum = numeros[0];

for (let i of numeros) {
  if (i > maiorNum) {
    maiorNum = i;
  } else if (i < menorNum) {
    menorNum = i;
  }
}
console.log(maiorNum - menorNum);
