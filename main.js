// const obj = {};

// Object.defineProperties(obj, {
//   property1: {
//     value: 42,
//     writable: true
//   },
//   property2: {}
// });

// console.log(obj.property1);
// obj.property1 = 200;
// console.log(obj.property1);
// expected output: 42

const data = [
  {
    id: 1,
    name: "Dalila",
    last_name: "Hatherleigh"
  },
  {
    id: 2,
    name: "Joan",
    last_name: "Ambrus"
  },
  {
    id: 3,
    name: "Flossie",
    last_name: "O'Codihie"
  },
  {
    id: 4,
    name: "Nester",
    last_name: "Benoi"
  },
  {
    id: 5,
    name: "Rania",
    last_name: "Pulhoster"
  },
  {
    id: 6,
    name: "Nick",
    last_name: "Silkston"
  },
  {
    id: 7,
    name: "Mellie",
    last_name: "Covotti"
  },
  {
    id: 8,
    name: "Fanny",
    last_name: "O'Dwyer"
  },
  {
    id: 9,
    name: "Del",
    last_name: "Gavigan"
  },
  {
    id: 10,
    name: "Evey",
    last_name: "Francescotti"
  }
];
const ul = document.getElementById("ul");
let input = document.getElementById("input");
input.style.display = "none";

input.value = "";

function updateItem(e) {
  // if (e.keyCode === 13) {
  const id = input.getAttribute("id");
  const item = document.querySelectorAll(`[key="${id}"]`)[0];
  if (input.value !== "" && item !== "Enter") {
    item.textContent = input.value;
  }

  if (e.keyCode === 13) {
    input.style.display = "none";
  }
}
// }

function removeItem(item, data, ul, li) {
  data.splice(data.indexOf(item), 1);
  ul.removeChild(li);
}

function editItem(item, data, li) {
  input.setAttribute("id", item.id);
  input.style.display = "";
  input.value = item.name;
}

for (const item of data) {
  const li = document.createElement("li");
  li.textContent = item.name;
  li.className = "list-group-item mt-1";
  li.setAttribute("key", item.id);
  li.addEventListener("dblclick", removeItem.bind(null, item, data, ul, li));

  input.addEventListener("keypress", updateItem);

  li.addEventListener("click", editItem.bind(null, item, data, li));
  ul.appendChild(li);
}
