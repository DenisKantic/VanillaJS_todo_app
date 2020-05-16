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


    // create checkmark button

    const checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    checkBtn.classList.add('check-btn');
    todoDiv.appendChild(checkBtn);

    // create trash button

    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn);
}