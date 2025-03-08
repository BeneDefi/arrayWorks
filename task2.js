// let todo = [];
// let addTodo = todo.push()
// let completeTodo = todo.splice()
// let veiwTodo = todo.forEach()


let todoList = [];

function addTask(task) {
  todoList.push(task);
}

function removeTask(task) {
  let index = todoList.indexOf(task);
  if (index !== -1) {
    todoList.splice(index, 1);
  }
}

function viewTasks() {
  todoList.forEach(task => console.log(task));
}


addTask('Buy groceries');
addTask('Walk the dog');
viewTasks();
removeTask('Buy groceries');
viewTasks();
