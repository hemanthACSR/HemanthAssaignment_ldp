var tables = {
  1: { items: [], total: 0 },
  2: { items: [], total: 0 },
  3: { items: [], total: 0 }
};

var activeTableId = null;

/* SEARCH TABLE */
document.getElementById("tableSearch").onkeyup = function () {
  var value = this.value.toLowerCase();
  var cards = document.getElementsByClassName("table-card");

  for (var i = 0; i < cards.length; i++) {
    cards[i].style.display =
      cards[i].innerText.toLowerCase().includes(value) ? "block" : "none";
  }
};

/* SEARCH MENU */
document.getElementById("menuSearch").onkeyup = function () {
  var value = this.value.toLowerCase();
  var items = document.getElementsByClassName("menu-item");

  for (var i = 0; i < items.length; i++) {
    items[i].style.display =
      items[i].innerText.toLowerCase().includes(value) ? "block" : "none";
  }
};

/* DRAG MENU */
var menuItems = document.getElementsByClassName("menu-item");
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].ondragstart = function (e) {
    var name = this.querySelector("h4").innerText;
    var price = this.querySelector("p").innerText.replace("₹", "");
    e.dataTransfer.setData("item", name + "," + price);
  };
}

/* DROP ON TABLE */
var tableCards = document.getElementsByClassName("table-card");
for (var i = 0; i < tableCards.length; i++) {

  tableCards[i].ondragover = function (e) {
    e.preventDefault();
  };

  tableCards[i].ondrop = function (e) {
    e.preventDefault();
    var tableId = this.dataset.tableId;
    var data = e.dataTransfer.getData("item").split(",");
    addItem(tableId, data[0], parseInt(data[1]));
    updateTable(tableId);
  };

  tableCards[i].onclick = function () {
    openModal(this.dataset.tableId);
  };
}

/* ADD ITEM */
function addItem(tableId, name, price) {
  var table = tables[tableId];
  var found = false;

  for (var i = 0; i < table.items.length; i++) {
    if (table.items[i].name === name) {
      table.items[i].qty++;
      found = true;
      break;
    }
  }

  if (!found) {
    table.items.push({ name: name, price: price, qty: 1 });
  }
}

/* UPDATE TABLE */
function updateTable(tableId) {
  var table = tables[tableId];
  var total = 0;
  var count = 0;

  for (var i = 0; i < table.items.length; i++) {
    total += table.items[i].price * table.items[i].qty;
    count += table.items[i].qty;
  }

  table.total = total;
  document.querySelector(
    '.table-card[data-table-id="' + tableId + '"] p'
  ).innerText = "₹ " + total + " | Total items: " + count;
}

/* MODAL */
function openModal(tableId) {
  activeTableId = tableId;
  document.getElementById("tableModal").style.display = "flex";
  document.querySelector("#tableModal h3").innerText =
    "Table - " + tableId + " Order Details";
  renderModal();
}


function renderModal() {
  var body = document.querySelector("#tableModal tbody");
  body.innerHTML = "";
  var table = tables[activeTableId];

  for (var i = 0; i < table.items.length; i++) {
    body.innerHTML +=
      "<tr>" +
      "<td>" + (i + 1) + "</td>" +
      "<td>" + table.items[i].name + "</td>" +
      "<td>₹ " + table.items[i].price + "</td>" +
      "<td><input type='number' min='1' value='" + table.items[i].qty +
      "' onchange='updateQty(" + i + ", this.value)'></td>" +
      "<td><button onclick='deleteItem(" + i + ")'>Delete</button></td>" +
      "</tr>";
  }

  document.querySelector("#tableModal strong").innerText =
    "Total: ₹ " + table.total;
}

function updateQty(index, value) {
  tables[activeTableId].items[index].qty = parseInt(value);
  updateTable(activeTableId);
  renderModal();
}

function deleteItem(index) {
  tables[activeTableId].items.splice(index, 1);
  updateTable(activeTableId);
  renderModal();
}

function closeModal() {
  document.getElementById("tableModal").style.display = "none";
}

function closeSession() {
  alert("Bill Generated: ₹ " + tables[activeTableId].total);
  tables[activeTableId] = { items: [], total: 0 };
  updateTable(activeTableId);
  closeModal();
}
