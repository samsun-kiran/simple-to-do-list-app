let input = document.getElementById('input');
let clickbtn = document.getElementById('add');
let result = document.getElementById('todolist') 

let todos = [];

clickbtn.addEventListener('click', () => {
    todos.push(input.value);
    addtodo(input.value)
    input.value = '';
})

function addtodo(todo) {
    let para = document.createElement('p');
    para.innerText = todo;
    result.appendChild(para)
    para.addEventListener('click', () => {
        para.style.textDecoration = 'line-through';
    })
    para.addEventListener("dblclick", () => {
        result.removeChild(para);
        remove(todo);
    })
}

function remove(todo) {
    let index = todos.indexOf(todo);
    if (index > -1) {
        todos.slice(index, 1)
    }
}