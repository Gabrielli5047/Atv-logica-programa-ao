const cpf = "12345678900";
const cnpj = "12345678000199";

// A)
if (cpf.length !== 11) {
  console.log("CPF Inválido");
} else {
  let arrayCpf = cpf.split("");
  arrayCpf.splice(3, 0, ".");
  arrayCpf.splice(7, 0, ".");
  arrayCpf.splice(11, 0, "-");
  console.log(arrayCpf.join(""));
}

//B)
if (cnpj.length !== 14) {
  console.log("CNPJ Inválido");
} else {
  let arrayCnpj = cnpj.split("");
  arrayCnpj.splice(2, 0, ".");
  arrayCnpj.splice(6, 0, ".");
  arrayCnpj.splice(10, 0, "/");
  arrayCnpj.splice(15, 0, "-");
  console.log(arrayCnpj.join(""));
}
