function solucao(precos) {
    let ordem = precos.sort((a, b) => a - b);
   let DescontomaisBarato = ordem[0] * 0.5;
   let valorApagar = 0;
   if (precos.length >= 3) {
     ordem.splice(0, 1, DescontomaisBarato);
     valorApagar = ordem.reduce((x, y) => x + y);
     console.log(valorApagar);
   } else {
     valorApagar = ordem.reduce((x, y) => x + y);
     console.log(valorApagar);
   }
   
 }