

let altura = prompt("Digite sua altura em metros:");

let peso = prompt("Digite seu peso em quilogramas:");


altura = parseFloat(altura);
peso = parseFloat(peso);


var imc = peso / (altura * altura);

if (imc >= 18.5 && imc <= 24.9) {
    console.log("Seu IMC está dentro do intervalo saudável.");
} else {
    console.log("Seu IMC não está dentro do intervalo saudável.");
}
