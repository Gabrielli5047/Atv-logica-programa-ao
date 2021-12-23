let i;
let montante = 90000, capital = 60000, n = 24;

i = (Math.pow(montante/capital, (1/n)) - 1)*100;
console.log(`O seu financiamento de ${capital} reais teve uma taxa de juros de ${i.toFixed(3)}%, pois após ${n} meses você teve que pagar ${montante} reais`);