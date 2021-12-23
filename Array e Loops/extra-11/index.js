const original = [5, 7, 13, 17, 26, 34, 118, 245];
const pirata = [];

for (let i of original) {
  if (i >= 10 && i <= 20) {
    const nova = pirata.push(i);
  } else if (i > 100) {
    const nova = pirata.push(i);
  }
}
console.log(pirata);
