let volume;
let diametro = 6
const k = (4/3);

//v = 4/3*pi*r^3 ---- D/2=r
volume = k * Math.pow((diametro/2), 3);
console.log(`O valor de uma esfera de raio 3 é ${volume} PI`);