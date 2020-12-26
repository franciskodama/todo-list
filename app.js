//SELECTORS --------------------------------
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');




//EVENT LISTENERS -------------------------
todoButton.addEventListener('click', addTodo);




//FUNCTIONS -------------------------------
function addTodo(event) {
    //Prevent form from submitting 
    event.preventDefault();

    //Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    
    //Append the text to <li>
    todoDiv.appendChild(newTodo);

    //Check MARK Button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);
    //Check TRASH Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('complete-btn');
    todoDiv.appendChild(trashButton);

    //Append todoDiv to todoList <ul>
    todoList.appendChild(todoDiv); 
}   
