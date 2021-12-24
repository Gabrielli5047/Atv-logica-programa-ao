function solucao(min, max, valores) {
    let array = [];
    for (let num of valores) {
      if (num >= min && num <= max) {
        array.push(num);
      }
    }
    console.log(array);
    
  }