
const addFormDom=document.getElementById('insertion-form');
const taskNameDom= document.getElementById('input');
const addButtonDom= document.getElementById('add-button');
const tasksList=document.getElementById('tasksList');
const showAllButton=document.getElementById('show-all');
const showDoneButton=document.getElementById('show-done');
const showNotDoneButton=document.getElementById('show-not-done');
taskNameDom.addEventListener('keyup', evaluateSubmitAbility)
addFormDom.addEventListener('submit', addTasks);
const radioButtonSpace= document.getElementById('radio-button-space');
showDoneButton.addEventListener('click', hideUndone)
showNotDoneButton.addEventListener('click', hideDone)
showAllButton.addEventListener ('click', showBoth)

function addTasks(event) {
    event.preventDefault(); 
    const taskSpace=document.createElement('li');
    taskSpace.classList.add('task-undone'); 
    const checkBox=document.createElement('input');
    checkBox.type='checkBox';
    checkBox.checked=false;
    checkBox.addEventListener('change', ()=>{
        if (checkBox.checked){
            taskSpace.classList.add('task-done');
            taskSpace.classList.remove('task-undone');
        } else {
            taskSpace.classList.add('task-undone'); 
            taskSpace.classList.remove('task-done');
        }
    })
    taskSpace.appendChild(checkBox);
    const taskSpan=document.createElement('span');
    tasksList.appendChild(taskSpace);
    taskSpace.appendChild(taskSpan);
    taskSpan.innerText=taskNameDom.value;
    taskNameDom.value=''; 
    addButtonDom.disabled=true; 
    radioButtonSpace.classList.remove('display-none');
}

function evaluateSubmitAbility(){ 
    addButtonDom.disabled=(taskNameDom.value==='');
}

function hideDone(){
    tasksList.classList.add('hide-done');
    tasksList.classList.remove('hide-undone')
}

function hideUndone(){
    tasksList.classList.add('hide-undone');
    tasksList.classList.remove('hide-done')
}

function showBoth(){
    tasksList.classList.remove('hide-undone');
    tasksList.classList.remove('hide-done')
}