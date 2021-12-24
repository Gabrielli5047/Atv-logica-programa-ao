function processData(input) {
    const linhas = input.trim().split("\n");
    const coordenadas = [];
    let maiorDistancia = 0;

    for (let linha of linhas) {
        const coord = linha.trim().split(" ");
        coordenadas.push({
            x: parseFloat(coord[0]),
            y: parseFloat(coord[1])
        });
    }
    
    for (let ix of coordenadas) {
        for (let iy of coordenadas) {
            const distancia = Math.sqrt((iy.x - ix.x) ** 2 + (iy.y - ix.y) ** 2);
            if (distancia > maiorDistancia) {
                maiorDistancia = distancia;
            }
        }
    }
    console.log(maiorDistancia);
}