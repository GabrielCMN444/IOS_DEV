// let nt1 = 8;
// let nt2 = 5;
// let media = (nt1 + nt2) / 2;

// console.log(`A media do aluno é: ${media}`);

// //Function

// function mediaAluno(nota1 = 0, nota2 = 0) {
//   return (nota1 + nota2) / 2;
// }

// let mAluno = (nt1, nt2) => {
//   return (nt1 + nt2) / 2;
// };

// console.log(`A sua média é: ${mediaAluno(5)}`);
// console.log(`A sua média é: ${mAluno(5, 10)}`);

//crie uma function em js calculando a média de um aluno com as seguintes regras:
// O aluno deve ser apenas aprovado com a média maior ou igual que 6.
// Se tiver faltas que são maiores que 5 o aluno deve ser reprovado.

function mediaAluno(nota1 = 0, nota2 = 0, nota3 = 0) {
  return (nota1 + nota2 + nota3) / 3;
}

let faltas = 3;

let media = 10

if (mediaAluno(5, 10, 8) >= 6 && faltas < 5) {
  console.log(
    `Sua média é ${mediaAluno(5, 10, 8).toFixed(
      1
    )} e suas faltas são ${faltas}, então foi aprovado`
  );
} else {
  console.log(`Reprovado`);
}
