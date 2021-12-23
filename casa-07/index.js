let populaçãoInicial = 1000, infectatosPorInicial = 4, tempo = 100;
let infectadosDecorridoTempo;

infectadosDecorridoTempo = populaçãoInicial*Math.pow(infectatosPorInicial, (tempo/7));
console.log(`P = ${infectadosDecorridoTempo}`);