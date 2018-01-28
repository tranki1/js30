const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const clearList = document.querySelector(".clearList");
const checkall = document.querySelector("#checkall");
let items = JSON.parse(localStorage.getItem("items")) || [];
function addItem(e) {
  e.preventDefault();
  const text = document.querySelector("[name=item]").value;
  const item = {
    text: text,
    done: false
  };
  items.push(item);

  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function toggleDone(e) {
  if (!e.target.matches("input")) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
  //skip if clic target is not input
  console.dir();
}

function toggleAll(e) {
  items.forEach(item => {
    if (this.checked) {
      item.done = true;
    } else {
      item.done = false;
    }
  });
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function populateList(plates = [], plateList) {
  plateList.innerHTML = plates
    .map((plate, i) => {
      return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      }/>
        <label For="item${i}">${plate.text}</label>
      </li>
    `;
    })
    .join("");
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
clearList.addEventListener("click", () => {
  localStorage.removeItem("items");
  items = [];
  populateList(items, itemsList);
});
checkall.addEventListener("click", toggleAll);

populateList(items, itemsList);
