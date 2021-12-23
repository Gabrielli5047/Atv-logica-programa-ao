const prova = {
  aluno: "João",
  materia: "Português",
  valor: 10,
  questoes: [
    {
      resposta: "a",
      correta: "b",
    },
    {
      resposta: "c",
      correta: "c",
    },
    {
      resposta: "e",
      correta: "b",
    },
    {
      resposta: "b",
      correta: "b",
    },
    {
      resposta: "c",
      correta: "c",
    },
  ],
};
function corrigirProva(prova) {
  let acertos = 0;
  let nota = 0;

  for (item of prova.questoes) {
    if (item.resposta === item.correta) {
      acertos += 1;
      nota = acertos * (prova.valor / prova.questoes.length);
    }
  }
  console.log(`O aluno ${prova.aluno} acertou ${acertos} e obteve ${nota}`);
}

corrigirProva(prova);
