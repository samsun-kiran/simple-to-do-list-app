// Get Elements
let input = document.getElementById('input');
let clickbtn = document.getElementById('add');
let result = document.getElementById('todolist') 

// Array initialization
let todos = [];

// Windows onload function
window.onload = () => {
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo => addtodo(todo));
}

// Click to push into a Array
clickbtn.addEventListener('click', () => {
    todos.push(input.value);
    localStorage.setItem('todos', JSON.stringify(todos)) // add to LocalStorage
    addtodo(input.value)
    input.value = '';
})

// Add to do list function
function addtodo(todo) {
    let para = document.createElement('p');
    para.innerText = todo;
    result.appendChild(para)
    para.addEventListener('click', () => {
        para.style.textDecoration = 'line-through';
    })
    para.addEventListener("dblclick", () => {
        result.removeChild(para);
        remove(todo); // remove function called
    })
}

// Remove function
function remove(todo) {
    let index = todos.indexOf(todo);
    if (index > -1) {
        todos.splice(index, 1) // removes the todo
    }
    localStorage.clear(); // Clear the Local Storage
    localStorage.setItem('todos', JSON.stringify(todos)) // Update the new Array to LocalStorage
}