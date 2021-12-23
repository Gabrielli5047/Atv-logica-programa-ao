const disjuntores = [false, false, true, false, false, true, false, false];
let encontrado = true;

for (let i = 0; i < disjuntores.length; i++) {
  const posicao = disjuntores[i];
  if (posicao === true) {
    console.log(i);
    encontrado = true;
  }
}
