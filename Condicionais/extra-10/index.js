const caractere = "E";
const vogalMaiuscula = ["A", "E", "I", "O", "U"];
const vogalMinuscula = ["a", "e", "i", "o", "u"];

if (caractere <= 0 || caractere >= 1) {
  console.log("numero");
} else {
  if (vogalMaiuscula.includes(caractere)) {
    console.log("Vogal maiúscula");
  } else if (vogalMinuscula.includes(caractere)) {
    console.log("Vogal minúscula");
  } else {
    console.log("Consoante");
  }
}

// OU
// const caractere = "P";
//if (caractere === "A" || caractere === "E" ||caractere === "I" ||caractere === "O" ||caractere === "U"){
//    console.log("Vogal maiuscula");
//} else if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u"){
// console.log("Vogal minuscula");
//}   else if ( caractere >= 0 || caractere <= 9){
//     console.log("Número");
//} else {
//  console.log("Consoante");
// }
