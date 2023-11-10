// Gera um número aleatório entre 0 e 10 
const numeroSorteado = Math.floor(Math.random() * 11);
let tentativas = 0;

function jogo() {
  const palpite = parseInt(prompt("Digite um número de 0 a 10:"));

  if (isNaN(palpite) || palpite < 0 || palpite > 10) {
    alert("Por favor, digite um número válido entre 0 e 10.");
    jogo(); 
    return;
  }

  tentativas++;

  if (palpite === numeroSorteado) {
    alert(`Parabéns, você acertou em ${tentativas} tentativa(s)! O número sorteado era ${numeroSorteado}.`);
  } else {
    alert("Tente novamente.");
    jogo(); 
  }
}

jogo(); 
