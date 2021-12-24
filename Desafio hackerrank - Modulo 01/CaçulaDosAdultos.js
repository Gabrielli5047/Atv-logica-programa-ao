function solucao(lista) {
    let maisNovo = 0;
  let maiores = lista.filter((x) => x >= 18);
  if (maiores.length === 0) {
    console.log("CRESCA E APARECA");
  } else {
    maisNovo = maiores.reduce((x, y) => (x <= y ? x : y));
    console.log(maisNovo);
  }
}