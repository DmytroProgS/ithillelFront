

const toDoList = document.querySelector(".toDoList");
const toDoAddTask = document.querySelector(".AddTask");

const newList = document.createElement('li');
newList.textContent = "Завдання 1"
const toDoDeleteTask = document.createElement('button');
toDoDeleteTask.textContent = "Видалити"

toDoList.appendChild(newList);
newList.appendChild(toDoDeleteTask);

toDoAddTask.addEventListener("click", () =>{

  const header = document.querySelector('.no-tasks-message');
  if (header) {
      toDoList.removeChild(header);
  }
  
  const newList = document.createElement('li');
  const dataInput = document.querySelector('#dataInput').value;
  newList.textContent = dataInput + " ";
  const toDoDeleteTask = document.createElement('button');
  toDoDeleteTask.textContent = "Видалити"
  toDoList.appendChild(newList);
  newList.appendChild(toDoDeleteTask);

})


toDoList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
      const li = event.target.parentElement;
      toDoList.removeChild(li);

      var Tasks = toDoList.getElementsByTagName('li');
      var countTasks = Tasks.length;

      const header = document.querySelector('.no-tasks-message');
      if (countTasks === 0) {
          if (!header) {
              const newHeader = document.createElement('h1');
              newHeader.textContent = "You are have not Tasks";
              newHeader.classList.add('no-tasks-message');
              toDoList.appendChild(newHeader);
          }
      } else {
          if (header) {
              toDoList.removeChild(header);
          }
      }
  }
});








