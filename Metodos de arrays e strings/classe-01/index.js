const comentario = "Esse é  muito perigoso!";
let array = comentario.toLowerCase().split(" ");

let covid = array.includes("covid");
let pandemia = array.includes("pandemia");

if (covid || pandemia) {
  console.log("Comentário bloqueado por conter palavras proibidas");
} else {
  console.log("Comentário autorizado");
}

// let quantidade = 0;
// for (let palavra of array) {
//   if (palavra === "covid" || palavra === "pandemia") {
//     quantidade += 1;
//   }
// }
// if (quantidade > 0) {
//   console.log("Comentário bloqueado por conter palavras proibidas");
// } else {
//   console.log("Comentário autorizado");
// }
