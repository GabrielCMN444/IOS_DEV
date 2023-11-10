const buscarCep = async () => {
  //Valor digitado do CEP
  const cep = document.querySelector("#cep").value;
  //"Conectando a API - aplicando o calor do CEP"
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  //Recebendo uma promessa
  const valorEndereco = await fetch(url);
  //formato json
  const valor = await valorEndereco.json();
  atualizarPag(valor);
};

const atualizarPag = (valor) => {
  document.querySelector("#endereco").value = valor.logradouro;
  document.querySelector("#bairro").value = valor.bairro;
};

//Elemento DOM - Campo CEP com o "escutador"
document.querySelector("#cep").addEventListener("focusout", buscarCep);
