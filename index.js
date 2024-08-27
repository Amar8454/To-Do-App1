let todoList = [
  { item: "Buy Milk", dueDate: "11/04/2024" },
  {
    item: "go to collage",
    dueDate: "11/03/2024",
  },
];
display();

function addTodo() {
  let inputElement = document.querySelector("#input-text");
  let dateElement = document.querySelector("#text");
  let todoItems = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({ item: todoItems, dueDate: todoDate });
  inputElement.value = "";
  inputElement.value = "";
  display();
}

function display() {
  let displayElement = document.querySelector(".todoItems");

  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    // let item = todoList[i].item;
    // let dueDate = todoList[i].dueDate;
    let { item, dueDate } = todoList[i];
    newHtml += `
      <span> ${item} </span>
      <span> ${dueDate} </span>
      <button id="button-delete" onclick=
      "todoList.splice(${i},1);
      display();">Delete</button>

     `;
  }
  displayElement.innerHTML = newHtml;
}
