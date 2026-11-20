const list = document.querySelector(".list")
const input = document.querySelector("input")

let counter = 0;
let todoList = [];
let todoInputValue = '';

function onInputChange(event) {
    todoInputValue = event.target.value
}

function addTodo(){
    if (!todoInputValue) {
        return;
    }
    todoList.push({
        id: counter++, 
        task: todoInputValue
    });
    console.log(todoList)
    renderTodos()
    input.value = ''
    todoInputValue = ''
}

function deleteTodo(id) {
    todoList = todoList.filter((todo) => todo.id !== id)
    renderTodos()
}

function renderTodos() {
    list.innerHTML = todoList
    .map(
        (element) => 
            `<li>
                ${element.task}
                <button onclick="deleteTodo(${element.id})" class="todo__delete">
                x
                </button>
            </li>`
    ).join("");
}
