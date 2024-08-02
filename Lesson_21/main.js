
const inputTask = $(".form__input");
const addTask = $(".form__btn");
const wrapperToDo = $(".js--todos-wrapper");

$(document).ready(function() {

    const addTaskToDOM = (taskValue) => {
        wrapperToDo.append(`
            <li class="todo-item">
                <input type="checkbox">
                <span class="todo-item__description" data-bs-toggle="modal" data-bs-target="#exampleModal">${taskValue}</span>
                <button class="todo-item__delete">Видалити</button>
            </li>
        `);
    };

    const saveTask = (task) => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const deleteTaskFromLocalStorage = (taskDescription) => {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => task !== taskDescription);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const updateEventListeners = () => {
        const inputCheckBoxes = $('input[type="checkbox"]');
        const toDoItemDescriptions = $('.todo-item__description');
        const deleteTasks = $(".todo-item__delete");

        inputCheckBoxes.each(function(index) {
            $(this).off("change").on("change", function() {
                if ($(this).is(":checked")) {
                    toDoItemDescriptions.eq(index).addClass("todo-item--checked");
                } else {
                    toDoItemDescriptions.eq(index).removeClass("todo-item--checked");
                }
            });
        });

        deleteTasks.each(function() {
            $(this).off("click").on("click", function() {
                const taskDescription = $(this).siblings('.todo-item__description').text();
                deleteTaskFromLocalStorage(taskDescription);
                $(this).parent().remove();
            });
        });

        toDoItemDescriptions.each(function() {
            $(this).off("click").on("click", function() {
                const taskDescription = $(this).text();
                $('#exampleModalLabel').text(taskDescription);
                $('.modal-body').text(`Текст завдання`);
            });
        });
    };

    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            addTaskToDOM(task);
        });
        updateEventListeners();
    };

    loadTasks();

    addTask.on("click", (event) => {
        event.preventDefault();

        const taskValue = inputTask.val().trim();
        if (taskValue === '') return;

        addTaskToDOM(taskValue);
        saveTask(taskValue);

        inputTask.val('');
        updateEventListeners();
    });

    updateEventListeners();
});
