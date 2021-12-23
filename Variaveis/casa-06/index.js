let distanciaEmMetro = 2100;
let tempo = 720;
let velocidadeMedia;
const transformaçao = 3.6;

//Velocidade media em m/s  ⬇️
//velocidadeMedia = distanciaEmMetro/tempo; 
        
//Velocidade em km/h aproximado!!
velocidadeMedia = Math.ceil((distanciaEmMetro/tempo)*transformaçao);
console.log(`velocidade = ${velocidadeMedia}`);
