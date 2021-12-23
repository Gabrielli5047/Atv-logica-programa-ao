const livros = [
  "Guerra e Paz",
  "A Montanha Mágica",
  "Cem Anos de Solidão",
  "Dom Quixote",
  "A Divina Comédia",
];
const nomeDoLivro = "Dom Quixote";

const posicao = livros.indexOf(nomeDoLivro);
console.log(`O livro está na posição ${posicao + 1}`);

// for (let i = 0; i < livros.length; i++) {
//   let posicao = livros[i];
//   if (posicao === nomeDoLivro) {
//     console.log(i + 1);
//   }
// }
