const nomes = ["Ana", "Joana", "Carlos", "amanda"];
let nome = [];
for (let i of nomes) {
  if (i[0] === "A" || i[0] === "a") {
    const nom = nome.push(i);
  }
}
console.log(nome);
