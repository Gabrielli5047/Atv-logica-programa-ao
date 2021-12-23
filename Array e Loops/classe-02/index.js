const letras = ["A", "a", "B", "C", "E", "e"];
let quantidade = 0;

for (let i = 0; i < letras.length; i++) {
  let item = letras[i];
  if (item === "e" || item === "E") {
    quantidade = quantidade + 1;
  }
}
if (quantidade > 0) {
  console.log(`Foram encontradas ${quantidade} letras "E" ou "e".`);
} else {
  console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
}

//SEGUNDA FORMA
// for (let letra of letras) {
//   if (letra === "E" || letra === "e") {
//     quantidade += letra.length;
//   }
// }

// if (quantidade > 0) {
//   console.log(`Foram encontradas ${quantidade} letras E ou e.`);
// } else {
//   console.log("Nenhuma letra E ou e foi encontrada.");
// }

//TERCEIRA FORMA
// letras.forEach(function (letra) {
//   if (letra === "e" || letra === "E") {
//     quantidade = quantidade + 1;
//   }
// });
// if (quantidade > 0) {
//   console.log(`Foram encontradas ${quantidade} letras "E" ou "e".`);
// } else {
//   console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
// }
