let capital = 1000;
let taxa = 12.5/100;
let tempo = 5;
let montante;

montante = Math.ceil(capital*(Math.pow(1+taxa, tempo)));   
console.log(`M = ${montante}`);