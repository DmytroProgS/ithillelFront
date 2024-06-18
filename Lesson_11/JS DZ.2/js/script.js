
const ColorBlock = document.querySelector(".block");
const changeColorAction = document.querySelector("#butColor");
console.log(changeColorAction);

changeColorAction.addEventListener('click', function(event) {
  ColorBlock.classList.toggle('changeColor');
});