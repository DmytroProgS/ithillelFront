
const ButtonBlock = document.querySelector("#buttonsDiv");
const Resut = document.querySelector("#result");

ButtonBlock.addEventListener('click', (event) => {
  const test = event.target.textContent;
  alert(`Ви клікнули по кнопці: ${test}`);
});
