const celular = 7199918888;

const numero = celular.toString().split("");

if (numero.length === 10) {
  numero.splice(0, 0, "(");
  numero.splice(3, 0, ")");
  numero.splice(4, 0, " ");
  numero.splice(5, 0, "9");
  numero.splice(6, 0, " ");
  numero.splice(11, 0, "-");
  console.log(numero.join(""));
} else if (numero.length === 8) {
  numero.splice(0, 0, "9");
  numero.splice(1, 0, " ");
  numero.splice(6, 0, "-");
  console.log(numero.join(""));
} else {
  console.log("Numero não existe");
}
