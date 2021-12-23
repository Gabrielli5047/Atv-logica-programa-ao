const carrinho = {
  nomeDoCliente: "Guido Bernal",
  produtos: [
    {
      id: 1,
      nome: "Camisa",
      qtd: 3,
      precoUnit: 3000,
    },
    {
      id: 2,
      nome: "Bermuda",
      qtd: 2,
      precoUnit: 5000,
    },
  ],
  imprimirResumo: function () {
    let totalItens = 0;
    let totalPagar = 0;
    for (let item of this.produtos) {
      totalItens += item.qtd;
      totalPagar += (item.precoUnit * item.qtd) / 100;
    }
    console.log(`
         Cliente: ${this.nomeDoCliente}
         Total de itens: ${totalItens} itens
         Total a pagar: R$ ${totalPagar},00`);
  },
};
carrinho.imprimirResumo();

const novaBermuda = {
  id: 2,
  nome: "Bermuda",
  qtd: 3,
  precoUnit: 5000,
};

function addProdutoAoCarrinho(carrinho, produto) {
  for (let item of carrinho.produtos) {
    if (item.id === produto.id) {
      item.qtd += produto.qtd;
      return;
    }
  }
  carrinho.produtos.push(produto);
}
addProdutoAoCarrinho(carrinho, novaBermuda);
carrinho.imprimirResumo();

const novoTenis = {
  id: 3,
  nome: "Tenis",
  qtd: 1,
  precoUnit: 10000,
};
addProdutoAoCarrinho(carrinho, novoTenis);
carrinho.imprimirResumo();
