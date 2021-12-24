function processData(input) {
    const entradas = input.trim().split(" ");
  let grupo1 = parseInt(entradas[0], 10);
  let grupo2 = parseInt(entradas[1], 10);
  let grupo3 = parseInt(entradas[2], 10);
  let grupo4 = parseInt(entradas[3], 10);

  let taxis = grupo4;

  taxis += Math.floor(grupo2 / 2);
  grupo2 = grupo2 % 2;

  const umComTres = Math.min(grupo1, grupo3);
  taxis += umComTres;
  grupo1 -= umComTres;
  grupo3 -= umComTres;

  if (grupo3 === 0) {
    taxis += Math.ceil((grupo1 + grupo2 * 2) / 4);
  } else {
    taxis += grupo3 + grupo2;
  }
  console.log(taxis);
} 