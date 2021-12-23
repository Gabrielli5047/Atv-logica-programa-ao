const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

for (let i = 0; i < filaDeFora.length; i++) {
  if (filaDeDentro.length < 5) {
    const primeiroFilaFora = filaDeFora.shift();
    filaDeDentro.push(primeiroFilaFora);
  }
}
console.log(filaDeDentro);
console.log(filaDeFora);
