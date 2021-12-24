function solucao(min, km) {
    let preco = 0;
    if (km <= 10 && min <= 20) {
      preco = km * 70 + min * 50;
      console.log(preco);
    } else if (km <= 10 && min > 20) {
      preco = km * 70 + 20 * 50 + (min - 20) * 30;
      console.log(preco);
    } else if (min > 20 && km > 10) {
      preco = 50 * 20 + 10 * 70 + (min - 20) * 30 + (km - 10) * 50;
      console.log(preco);
    } else {
      preco = min * 50 + 10 * 70 + (km - 10) * 50;
      console.log(preco);
    }
  }