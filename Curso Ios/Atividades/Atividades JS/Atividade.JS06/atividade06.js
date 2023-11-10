const prodPrice = prompt("Insira o valor do produto");
const promCode = prompt("Insira o código promocional");

let discountPrice = 0;

switch (promCode) {
  case "DESC1":
    discountPrice = prodPrice - prodPrice * 0.5;
    console.log(
     ' O preço original era de ${prodPrice}, e com o desconto ficou ${discountPrice}'
    );
    break;
  case "DESC2":
    discountPrice = prodPrice - prodPrice * 0.10;
    console.log(
    '  O preço original era de ${prodPrice}, e com o desconto ficou ${discountPrice}'
    );
    break;
  case "DESC3":
    discountPrice = prodPrice - prodPrice * 0.15;
    console.log(
    '  O preço original era de ${prodPrice}, e com o desconto ficou ${discountPrice}'
    );
    break;
  case "DESC4":
    discountPrice = prodPrice - prodPrice * 0.20;
    console.log(
      'O preço original era de ${prodPrice}, e com o desconto ficou ${discountPrice}'
    );
    break;
  case "DESC5":
    discountPrice = prodPrice - prodPrice * 0.25;
    console.log(
'      O preço original era de ${prodPrice}, e com o desconto ficou ${discountPrice}'
    );
    break;
  default:
    alert("Insira um desconto válido");
    break;
}
