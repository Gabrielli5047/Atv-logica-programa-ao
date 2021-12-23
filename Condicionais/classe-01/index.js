const jogada1 = "pedra";
const jogada2 = "tesoura";

//seu código aqui
if (jogada1 === jogada2) {
  console.log("Empate");
} else if (jogada1 === "pedra" && jogada2 === "tesoura") {
  console.log("pedra");
} else if (jogada1 === "papel" && jogada2 === "tesoura") {
  console.log("tesoura");
} else {
  console.log("papel");
}
