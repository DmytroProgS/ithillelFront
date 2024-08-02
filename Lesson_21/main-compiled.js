"use strict";

var inputTask = $(".form__input");
var addTask = $(".form__btn");
var wrapperToDo = $(".js--todos-wrapper");
$(document).ready(function () {
  var addTaskToDOM = function addTaskToDOM(taskValue) {
    wrapperToDo.append("\n            <li class=\"todo-item\">\n                <input type=\"checkbox\">\n                <span class=\"todo-item__description\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\">".concat(taskValue, "</span>\n                <button class=\"todo-item__delete\">\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438</button>\n            </li>\n        "));
  };
  var saveTask = function saveTask(task) {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  var deleteTaskFromLocalStorage = function deleteTaskFromLocalStorage(taskDescription) {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(function (task) {
      return task !== taskDescription;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  var updateEventListeners = function updateEventListeners() {
    var inputCheckBoxes = $('input[type="checkbox"]');
    var toDoItemDescriptions = $('.todo-item__description');
    var deleteTasks = $(".todo-item__delete");
    inputCheckBoxes.each(function (index) {
      $(this).off("change").on("change", function () {
        if ($(this).is(":checked")) {
          toDoItemDescriptions.eq(index).addClass("todo-item--checked");
        } else {
          toDoItemDescriptions.eq(index).removeClass("todo-item--checked");
        }
      });
    });
    deleteTasks.each(function () {
      $(this).off("click").on("click", function () {
        var taskDescription = $(this).siblings('.todo-item__description').text();
        deleteTaskFromLocalStorage(taskDescription);
        $(this).parent().remove();
      });
    });
    toDoItemDescriptions.each(function () {
      $(this).off("click").on("click", function () {
        var taskDescription = $(this).text();
        $('#exampleModalLabel').text(taskDescription);
        $('.modal-body').text("\u0422\u0435\u043A\u0441\u0442 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F");
      });
    });
  };
  var loadTasks = function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(function (task) {
      addTaskToDOM(task);
    });
    updateEventListeners();
  };
  loadTasks();
  addTask.on("click", function (event) {
    event.preventDefault();
    var taskValue = inputTask.val().trim();
    if (taskValue === '') return;
    addTaskToDOM(taskValue);
    saveTask(taskValue);
    inputTask.val('');
    updateEventListeners();
  });
  updateEventListeners();
});
