const email = "aluno@cubos.academy";

if (email.startsWith(".")) {
  console.log("Email invalido");
} else if (email.endsWith(".")) {
  console.log("Email invalido");
} else if (email.indexOf(".") === -1) {
  console.log("Email invalido");
} else if (!email.includes("@")) {
  console.log("Email invalido");
} else {
  console.log("E-mail válido");
}
