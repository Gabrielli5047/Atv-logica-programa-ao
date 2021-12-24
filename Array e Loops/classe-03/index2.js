const numeros = [54, 22, 14, 87, 100, 284];
let soma = 0;
let posicao

for (let i = 0; i < numeros.length; i++) {
  const item = numeros[i];
  if (item === 10) {
      posicao = i
    soma += 1;
  }
}
if(soma !== 0) {
    console.log(`${posicao}`)
}else{
    console.log("-1")
}
