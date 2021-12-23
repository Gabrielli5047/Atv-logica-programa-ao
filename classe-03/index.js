//Ele tem.
let t = 80;
//Valor do tenis.
let b = 129.99;
//Valor do desconto.
let d;
//Achar quanto de dinheiro precisa no desconto.
let c = b - t;
//100%
let a = 100;

d = Math.ceil((c * a)/ b);
console.log(`d = ${d} %`);
