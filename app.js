let taskFormEl = document.querySelector('#task-form');
taskFormEl.addEventListener('submit', function(event){
    // event.preventDefault()
    let taskInputEl = document.querySelector('#input-item');
    let task = taskInputEl.value.trim() // Remove some extra spaces

    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')):[];
    taskList.unshift(task);

    //set to Local storage
    localStorage.setItem('tasks',JSON.stringify(taskList));
    displayTask();
    window.reload();
});

let displayTask = () => {
    let taskListEl = document.querySelector('#task-list');
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')):[];
    if(taskList.length !== 0){
        let each = '';
        for(let task of taskList){
            each += `<li class="list-group-item list-group-item-dark list-group-item-warning mb-3 ">
                        <span>${task}</span>
                        
                        <span class="close ">
                        <i class="fa fa-times-circle"></i>
                        </span>
                    </li>`
        }
        taskListEl.innerHTML = each;
    }
}
displayTask();

//Remove Task

let taskListEl = document.querySelector('#task-list');
taskListEl.addEventListener('click',function(event){
    let targetEl = event.target
    if(targetEl.classList.contains('fa-times-circle')){
       let actualEl = targetEl.parentElement.parentElement;
       let selectedTask = actualEl.innerText;

       //get task from local storage
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')):[];
        taskList = taskList.filter(function(task){
            return task.trim() !== selectedTask.trim();
        });
        localStorage.setItem('tasks',JSON.stringify(taskList));
        displayTask();
        location.reload();
    }
    
})

//Edit task

// let taskEditEl = document.querySelector('#task-edit');
// if(taskEditEl){
//     taskEditEl.addEventListener('click',(event)=>{
//         let input = document.createElement("input");
//   input.type = "text";
//   input.value = taskEditEl.textContent;
//   event.append(input);
//   input.focus();
//   input.addEventListener("blur", () => {
//     taskEditEl.innerHTML = input.value;
//     input.remove();
//   });
//     })
// }