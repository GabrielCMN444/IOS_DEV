let frutas = ["  Banana", "Maçã", "Tomate", "Laranja", "Limão"];

console.log(frutas.length);

console.log(
  `Mostrar os 3 primeiros caracteres de cada Fruta: ${frutas.map((fruta) =>
    fruta.substring(0, 3)
  )}.`
);

console.log(
  `Limpando caracter em branco do início: ${frutas.map((fruta) =>
    fruta.trim()
  )}.`
);

console.log(
  `Mostrar as Frutas em caixa baixa: ${frutas.map((fruta) =>
    fruta.toLowerCase()
  )}.`
);
