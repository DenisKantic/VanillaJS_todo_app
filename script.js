const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.submit-btn');
const todoList = document.querySelector('.todo-list');


// event listeners

todoButton.addEventListener('click', createItem);
todoList.addEventListener('click', removeItem);


// functions

function createItem(event){


    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-div');


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


    todoList.appendChild(todoDiv);

    todoInput.value="";
}

function removeItem(e){

    const item=e.target;

    if(item.classList[0]==='trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }

    if(item.classList[0]==='check-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}