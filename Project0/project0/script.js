const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let todoCount = 0;
let uncheckedCount = 0;

function newTodo() 
{
  addTodo();
}

function addTodo() {
    var ul = document.getElementById("todo-list");
    var li = document.createElement("li");
    var inputValue = document.getElementById("newItem").value;
    var listItem = document.createTextNode(inputValue);
    li.appendChild(listItem);

    if (inputValue === "")
    {
      alert("Please add an item");
    }
    else
    {
      document.getElementById("todo-list").appendChild(li);
      totalTodos();
    }
    document.getElementById("newItem").value = "";
}

function totalTodos() {
  todoCount++;
  document.getElementById("item-count").innerHTML = todoCount;
  uncheckedCount++;
  document.getElementById("unchecked-count").innerHTML = uncheckedCount;
}