const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "";

if (apelido) {
  console.log(`${apelido}`);
} else if (primeiroNome) {
  console.log(`${primeiroNome} ${sobrenome}`);
} else {
  console.log("É obrigatorio preencher primeiro nome!");
}
