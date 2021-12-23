//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "dinheiro";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;
let valorPagar;

if (tipoDePagamento === "credito") {
  valorPagar = (valorDoProduto - valorDoProduto * (5 / 100)) / 100;
  console.log(`Valor a ser pago: R$${valorPagar}`);
} else if (tipoDePagamento === "cheque") {
  valorPagar = (valorDoProduto - valorDoProduto * (3 / 100)) / 100;
  console.log(`Valor a ser pago: R$${valorPagar}`);
} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
  valorPagar = (valorDoProduto - valorDoProduto * (10 / 100)) / 100;
  console.log(`Valor a ser pago: R$${valorPagar}`);
}
