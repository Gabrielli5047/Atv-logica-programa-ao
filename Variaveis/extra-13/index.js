let areaTotal;
let raio = 5;
let altura = 10;
const pi = 3.14159;
const k = 2;

// calculo da área total do cilindro
areaTotal = k * pi * Math.pow(raio, 2) + k * pi * raio * altura;
console.log(`At = ${areaTotal}`);