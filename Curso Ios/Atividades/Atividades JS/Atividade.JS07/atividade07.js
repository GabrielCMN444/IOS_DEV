const alunos = [
  {
    nome: "Alice",
    notas: [8, 9, 7],
    endereco: "Rua A, 123",
  },
  {
    nome: "Bob",
    notas: [6, 5, 4],
    endereco: "Avenida B, 456",
  },
  {
    nome: "Carol",
    notas: [9, 8, 7],
    endereco: "Rua C, 789",
  },
];

function calcularMedia(notas) {
  const soma = notas.reduce((total, nota) => total + nota, 0);
  return soma / notas.length;
}

function verificarStatusAluno(aluno) {
  const media = calcularMedia(aluno.notas);
  if (media >= 7) {
    return "aprovado(a)";
  } else {
    return "reprovado(a)";
  }
}

alunos.forEach((aluno) => {
  const status = verificarStatusAluno(aluno);
  console.log(
    `Aluno(a) ${aluno.nome} com notas ${aluno.notas.join(", ")} mora em ${aluno.endereco} e teve a média ${calcularMedia(aluno.notas).toFixed(2)}, portanto foi ${status}.`
  );
});