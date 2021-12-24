function processData(input) {
    const array = input.trim().split("\n");
  let senhaa = array[0];
  let bugado = array[1];

  for (let is = 0; is < senhaa.length; is++) {
    let posicao = bugado.indexOf(senhaa[is]);
    if (posicao === -1) {
      console.log("NAO");
      return;
    } else {
      bugado = bugado.substr(posicao + 1);
    }
  }
  console.log("SIM");
} 