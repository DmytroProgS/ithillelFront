

const buttonsDiv = document.querySelector("#buttonsDiv")
const buttonPrompt = document.querySelector(".prompt")
const buttonLink = document.querySelector(".link")

buttonPrompt.addEventListener("click", () =>{
   const enterText = prompt("Enter text");
   const link = document.createElement("a")
   link.textContent = buttonLink.textContent;
   buttonLink.textContent = ""
   link.href = enterText;
   link.target = "_blank";
   buttonLink.appendChild(link);
} )
