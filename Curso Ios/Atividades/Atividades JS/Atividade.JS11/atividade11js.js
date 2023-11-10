// Msg de boas vindas
window.alert("Boas vindas");

// Título da Página
document.title = "Atividade 11 de JS";

// PARTE DO SECTION

// Adicionar section
let section = document.createElement("section");

// Título e parágrafo da section
let títuloSec = document.createElement("h1");
títuloSec.textContent = "Título H1";

let parágrafoSec = document.createElement("p1");
parágrafoSec.textContent = "lorem ipsum dolor sit amet";

// Adicionar o título e parágrafo na section
section.appendChild(títuloSec);
section.appendChild(parágrafoSec);

// PARTE DO ARTICLE

// Adicionar article
let article = document.createElement("article");

// Título e parágrafo do article
let títuloArt = document.createElement("h2");
títuloArt.textContent = "Título H2";

let parágrafoArt = document.createElement("p2");
parágrafoArt.textContent = "lorem ipsum dolor sit amet";

// Adicionar o título e parágrafo no article
article.appendChild(títuloArt);
article.appendChild(parágrafoArt);

// Adicionar a section e o article ao corpo da página
document.body.appendChild(section);
document.body.appendChild(article);
