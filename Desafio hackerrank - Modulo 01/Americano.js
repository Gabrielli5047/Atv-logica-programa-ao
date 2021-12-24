function solucao(numeros) {
    const soma = numeros.reduce((x, y) => x + y);
 const jogadores = numeros.length;

 if (soma % jogadores === 0) {
   posicao = numeros.length;
   console.log(posicao);
 }
 if (soma % jogadores !== 0) {
   posicao = soma % jogadores;
   console.log(posicao);
 }
 
}