const frutas = ["Banana", "Maçã", "Abacaxi", "Pêra", "Uva"];

// //a)
const inverso = frutas.reverse();
console.log(inverso.join(", "));

//b)
const primFru = frutas.shift();
const ultFru = frutas.pop();
const newFru = frutas.splice(frutas.length, 0, "Melão");
console.log(frutas);
