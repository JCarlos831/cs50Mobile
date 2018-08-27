const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let todoList = [];
let todoCount = 0;

function newTodo() 
{
  addTodo();
  totalTodos();
}

function addTodo(item) {
  todoList.push("new todo item");
  console.log(todoList);
}

function totalTodos() {
  todoCount = todoList.length;
  document.getElementById("item-count").innerHTML = todoCount;
}