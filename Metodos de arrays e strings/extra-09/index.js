// const nomes = ["Juninho", "Léo", "Guido", "Dina", "Vitinho", "Nanda"];
// const tamanhoDoGrupo = 4;
// const testenomes = nomes.splice(0, 4);

// function criarGrupos(arr, quantidade) {
//   if (arr.length > quantidade) {
//     arr.splice(0, quantidade);
//   }
//   console.log(arr);
// }
// criarGrupos(nomes, tamanhoDoGrupo);

const nomes = ["Juninho", "Léo", "Guido", "Dina", "Vitinho", "Nanda"];
const tamanhoDoGrupo = 4;

function separaGrupo(arr, quantidade) {
  let grupo = [];
  if (arr.length > quantidade) {
    grupo = arr.splice(0, quantidade);
    console.log(grupo.join(", ") + ".");
  }
  console.log(arr.join(", ") + ".");
}

separaGrupo(nomes, tamanhoDoGrupo);
