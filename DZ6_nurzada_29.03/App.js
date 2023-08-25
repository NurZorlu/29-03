//to do list DZ1
const createButton = document.querySelector("#create_button");
const todoList = document.querySelector("#todo_list");

const createToDo = () => {
  const input = document.querySelector("#input").value;
  if (input === "") {
    alert("Введите задачу");
    !todoList.prepend(div);
  }

  const div = document.createElement("div");
  const divButton = document.createElement("div");
  const text = document.createElement("h3");
  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");

  div.setAttribute("class", "block_text");
  divButton.setAttribute("class", "div_button");
  deleteButton.setAttribute("class", "delete_button");
  editButton.setAttribute("class", "edit_button");

  deleteButton.innerText = "DELETE";
  editButton.innerText = "EDIT";
  text.textContent = input;

  divButton.append(deleteButton, editButton);
  div.append(text, divButton);

  todoList.prepend(div);

  input.value = "";

  deleteButton.onclick = () => {
    todoList.removeChild(div);
  };
};

createButton.onclick = () => {
  createToDo();
  input.value = "";
};

//DZ2

function getBooks(...books) {
  let newBooks = books.filter((book) => book.toLowerCase().includes("н"));
  console.log(newBooks);
}
getBooks(
  "Война и мир",
  "Преступление и наказание",
  "Ночной дозор",
  "Бойцовский клуб",
  "1984",
  "Little princHes"
);
