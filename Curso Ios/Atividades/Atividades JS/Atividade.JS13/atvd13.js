let calcular = document.querySelector("#calcular");
calcular.addEventListener("click", imcIn);

function imcIn() {
  let peso1 = Number(document.querySelector("#peso1").value);
  let altura2 = Number(document.querySelector("#altura1").value);
  let resultado = document.querySelector("#txt");
  let IMC = peso1 / (altura2 * altura2);
  resultado.innerHTML = `Seu imc é: ${IMC.toFixed(1)}`;
  let imcvalor = document.querySelector("#imcvalor");
  
  
  switch (true) {
    case IMC < 16:
      imcvalor.innerHTML = "Muito abaixo do peso.";
      break;
    case IMC >= 17 && IMC <= 18.4:
      console.log(IMC);
      imcvalor.innerHTML = "Abaixo do peso.";
      break;
    case (IMC >= 18.5) && (IMC <= 24.9):
      imcvalor.innerHTML = "Peso normal.";
      break;
    case IMC >= 25 && IMC <= 29.9:
      imcvalor.innerHTML = "Acima do peso.";
      break;
    case IMC >= 30 && IMC < 34.9:
      imcvalor.innerHTML = "Obesidade grau I.";
      break;
    case IMC >= 17 && IMC <= 18.4:
      imcvalor.innerHTML = "Obesidade grau II.";
      break;
    case IMC >= 17 && IMC <= 18.4:
      imcvalor.innerHTML = "Obesidade grau III.";
      break;
    default:
      imcvalor.innerHTML = "IMC inválido.";
      break;
  }
}
