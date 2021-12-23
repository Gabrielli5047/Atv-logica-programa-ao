//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;
let valorParcelas;
let parcelasRestantes;

if (valorDoProduto > valorPago) {
  valorParcelas = valorDoProduto / quantidadeDoParcelamento / 100;
  parcelasRestantes = quantidadeDoParcelamento - valorPago / valorParcelas;
  console.log(
    `Restam ${parcelasRestantes} parcelas de R$${valorParcelas.toFixed(2)}`
  );
}

//if (valorDoProduto > valorPago){
//    valorParcelas = (valorDoProduto/quantidadeDoParcelamento)/100;
//    parcelasRestantes = quantidadeDoParcelamento - valorPago/(valorDoProduto/100/quantidadeDoParcelamento);
//    console.log(`Restam ${parcelasRestantes} parcelas de R$${valorParcelas}`);
//}
