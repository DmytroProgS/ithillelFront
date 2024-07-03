const inputTask = document.querySelector(".form__input");
const addTask = document.querySelector(".form__btn");
const wrapperToDo = document.querySelector(".js--todos-wrapper");

const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        addTaskToDOM(task);
    });
    updateEventListeners();
}

document.addEventListener("DOMContentLoaded", loadTasks);

addTask.addEventListener("click", (event) => {
    event.preventDefault();

    const taskValue = inputTask.value.trim();
    if (taskValue === '') return;

       addTaskToDOM(taskValue);

       saveTask(taskValue);

       inputTask.value = '';
       updateEventListeners();
})


const addTaskToDOM = (taskValue) => {
    wrapperToDo.insertAdjacentHTML("beforeend", `
        <li class="todo-item">
            <input type="checkbox">
            <span class="todo-item__description">${taskValue}</span>
            <button class="todo-item__delete">Видалити</button>
        </li>
    `);
}

const saveTask = (task) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};


const updateEventListeners = () => {
    const inputCheckBoxes = document.querySelectorAll('input[type="checkbox"]');
    const toDoItemDescriptions = document.querySelectorAll('.todo-item__description');
    const deleteTasks = document.querySelectorAll(".todo-item__delete");

    inputCheckBoxes.forEach((inputCheckBox, index) => {
        inputCheckBox.addEventListener("change", () => {
            if(inputCheckBox.checked) {
                toDoItemDescriptions[index].classList.add("todo-item--checked");
            } else {
                toDoItemDescriptions[index].classList.remove("todo-item--checked");
            }
        })
    })

    deleteTasks.forEach((deleteTask) => {
        deleteTask.addEventListener("click", ()=> {
            const taskDescription = deleteTask.previousElementSibling.textContent;
            deleteTaskFromLocalStorage(taskDescription);
            deleteTask.parentElement.remove();
        });
    });

}

const deleteTaskFromLocalStorage = (taskDescription) =>{
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task !== taskDescription);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

updateEventListeners();

