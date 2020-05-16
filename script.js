const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.submit-btn');
const todoList = document.querySelector('.todo-list');


// event listeners

todoButton.addEventListener('click', createItem);


// functions

function createItem(event){


    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('.todo-div');


    const newItem = document.createElement('li');
    newItem.innerText = todoInput.value;
    newItem.classList.add('todo-item');
    todoDiv.appendChild(newItem);
}