const funcionarios = [
  { nome: "João", salario: 4000 },
  { nome: "Maria", salario: 5500 },
  { nome: "Pedro", salario: 4800 },
  { nome: "Wally", salario: 4800 },
  { nome: "Ana", salario: 6000 },
];

// Listar todos os funcionários e seus salários
console.log("Lista de funcionários e salários:");
funcionarios.forEach((funcionario) => {
  console.log(`Nome: ${funcionario.nome}, Salário: ${funcionario.salario}`);
});

// Aplicar reajuste de 5% a todos os funcionários
const funcionariosComReajuste = funcionarios.map((funcionario) => ({
  nome: funcionario.nome,
  salario: funcionario.salario * 1.05, // Aumento de 5%
}));

console.log("\nLista de funcionários com reajuste de 5%:");
funcionariosComReajuste.forEach((funcionario) => {
  console.log(`Nome: ${funcionario.nome}, Salário: ${funcionario.salario}`);
});

// Filtrar os funcionários que recebem mais de 5000
const funcionariosMaisDe5000 = funcionariosComReajuste.filter((funcionario) => funcionario.salario > 5000);

console.log("\nFuncionários que recebem mais de 5000:");
funcionariosMaisDe5000.forEach((funcionario) => {
  console.log(`Nome: ${funcionario.nome}, Salário: ${funcionario.salario}`);
});

// Pesquisar o funcionário "Wally"
const wally = funcionarios.find((funcionario) => funcionario.nome === "Wally");

if (wally) {
  console.log(`\nVocê encontrou o funcionário Wally!`);
} else {
  console.log(`\nFuncionário Wally não encontrado.`);
}