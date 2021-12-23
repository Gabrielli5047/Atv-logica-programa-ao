const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 300000; //emCentavos

//seu código aqui
if ((portadoraDeDoenca || aposentada) === true) {
  console.log("ISENTA");
} else if (totalDeRendimentos > 28559.7) {
  console.log("PEGA LEAO");
} else {
  console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
}
