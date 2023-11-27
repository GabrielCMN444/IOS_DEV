let items = [];
let qtde = [];
let valor = [];

function addItem() {
  let item = document.getElementById("item").value;
  let qtd = document.getElementById("qtd").value;
  let val = document.getElementById("val").value;

  items.push(item);
  qtde.push(qtd);
  valor.push(val);

  updateList();
}

function updateList() {
  let list = document.getElementById("list");
  let total = 0;

  list.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let qtd = qtde[i];
    let val = valor[i];

    let li = document.createElement("li");
    li.innerHTML = `${item} - ${qtd} - ${val}`;

    let btnAdd = document.createElement("button");
    btnAdd.innerHTML = "+";
    btnAdd.onclick = () => {
      qtde[i]++;
      updateList();
    };

    let btnSub = document.createElement("button");
    btnSub.innerHTML = "-";
    btnSub.onclick = () => {
      if (qtde[i] > 1) {
        qtde[i]--;
        updateList();
      }
    };

    let btnDel = document.createElement("button");
    btnDel.innerHTML = "x";
    btnDel.onclick = () => {
      items.splice(i, 1);
      qtde.splice(i, 1);
      valor.splice(i, 1);
      updateList();
    };

    li.appendChild(btnAdd);
    li.appendChild(btnSub);
    li.appendChild(btnDel);

    list.appendChild(li);

    total += qtd * val;
  }

  let liTotal = document.createElement("li");
  liTotal.innerHTML = `Total: ${total}`;

  list.appendChild(liTotal);
}
