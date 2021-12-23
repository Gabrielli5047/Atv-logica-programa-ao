const contaBancaria = {
  nome: "Maria",
  saldo: 0,
  historicos: [],

  depositar: function (valor) {
    this.saldo += valor;
    this.historicos.push({ tipo: "Deposito", valor: `${valor}` });
    return `Deposito de R$${valor / 100} realizado para o cliente: ${
      contaBancaria.nome
    }`;
  },

  sacar: function (valor) {
    if (valor > contaBancaria.saldo) {
      return `Saldo insuficiente para o saque de: ${contaBancaria.nome}`;
    } else {
      contaBancaria.saldo -= valor;
      contaBancaria.historicos.push({ tipo: "Saque", valor: `${valor}` });
      return `saque de R$${valor / 100} realizado para o cliente: ${
        contaBancaria.nome
      }`;
    }
  },

  extrato: function () {
    //return para o loop
    let extratoAtual = `Extrato de Maria - Saldo: R$${this.saldo}\nHistorico:\n`;
    for (let i = 0; i < this.historicos.length; i++) {
      extratoAtual += `${this.historicos[i].tipo} de $${this.historicos[i].valor}\n`;
    }
    return extratoAtual;
  },
};
console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());
