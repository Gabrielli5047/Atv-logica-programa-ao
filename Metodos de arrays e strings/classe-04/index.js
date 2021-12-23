let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let tags = ["financeiro", "administrativo", "geral"];

// // //a
if (identificador.length < 6) {
  let newId = identificador.padStart(6, "0");
  console.log(newId);
}

//b
let palavraFormatata = "";
let palavras = nome.toLowerCase().split(" ");
for (let palavra of palavras) {
  palavraFormatata += palavra[0].toUpperCase() + palavra.slice(1) + " ";
}
console.log(palavraFormatata);

// //c
let emailCorreto = email.trim();
console.log(emailCorreto);

//d
const taggs = tags.join(", ");
console.log(taggs);
