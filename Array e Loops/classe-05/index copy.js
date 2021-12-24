const original = [1, 4, 12, 21, 53, 88, 112];
const pares = [0,0,0,0,0,0,0];

  for(let i = 0; i < original.length; i++){
    let numero = original[i]
    if(numero % 2 === 0){
      for(let i = 0; i < pares.length; i++){
        if(pares[i] === 0){
          pares[i] = numero;
        }
    }
  }
}
console.log(pares);
