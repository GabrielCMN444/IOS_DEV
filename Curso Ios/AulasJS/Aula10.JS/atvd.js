class Carro {
  constructor(marca, modelo, valor, ano, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.valor = valor;
    this.ano = ano;
    this.cor = cor;
  }
}

let meuCarro1 = new Carro("Honda", "Civic", 30000, 1997, "Prata");
let meuCarro2 = new Carro("Hyunday", "Tucson", 48000, 2014, "Preto");
let meuCarro3 = new Carro("Dodge", "Mustang Demon", 500000, 2014, "Preto");

console.log(`Marca: ${meuCarro1.marca}`);
console.log(`Modelo: ${meuCarro1.modelo}`);
console.log(`Valor: ${meuCarro1.valor}`);
console.log(`Ano: ${meuCarro1.ano}`);
console.log(`Cor: ${meuCarro1.cor}`);

console.log();

console.log(`Marca: ${meuCarro2.marca}`);
console.log(`Modelo: ${meuCarro2.modelo}`);
console.log(`Valor: ${meuCarro2.valor}`);
console.log(`Ano: ${meuCarro2.ano}`);
console.log(`Cor: ${meuCarro2.cor}`);

console.log();

console.log(`Marca: ${meuCarro3.marca}`);
console.log(`Modelo: ${meuCarro3.modelo}`);
console.log(`Valor: ${meuCarro3.valor}`);
console.log(`Ano: ${meuCarro3.ano}`);
console.log(`Cor: ${meuCarro3.cor}`);
