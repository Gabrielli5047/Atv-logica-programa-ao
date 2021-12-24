function solucao(jogadores) {
    let somaUm = 0;
   let somaZero = 0;
 
   for (let item of jogadores) {
     if (item.jogada === 1) {
       somaUm += 1;
     }
     if (item.jogada === 0) {
       somaZero += 1;
     }
   }
   if (somaUm !== 1 && somaZero !== 1) {
     console.log("NINGUEM");
   }
   for (let i = 0; i < jogadores.length; i++) {
     let jogador = jogadores[i];
     if (somaUm === 1 && jogador.jogada === 1) {
       console.log(jogador.nome);
     } else if (somaZero === 1 && jogador.jogada === 0) {
       console.log(jogador.nome);
     }
   }
   
 }