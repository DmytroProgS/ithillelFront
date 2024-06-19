const images = [
  {url: "./img/1.jpg"},
  {url: "./img/2.jpg"},
  {url: "./img/3.jpg"},
  {url: "./img/4.jpg" },
  {url: "./img/5.jpg"},
  {url: "./img/6.jpg"},
  {url: "./img/7.jpg" },
  {url: "./img/8.jpg"},
  {url: "./img/9.jpg"},
]

const imageBox = document.querySelector(".imgBox");
const buttonAction = document.querySelector(".buttonAction");

function generateRandomNumber() {
  let min = 1;
  let max = images.length - 1;
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

buttonAction.addEventListener("click", () => {
  const indexRundom = generateRandomNumber();
  const imRundom = images[indexRundom].url;
  imageBox.innerHTML = `<img src=${imRundom} width="400" height="400">`;
})


