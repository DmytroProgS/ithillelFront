const images = [{
    url: "images/slider1.png",
    alt: "slider 1"
},
{
    url: "images/slider2.png",
    alt: "slider 2"
},
{
    url: "images/slider3.png",
    alt: "slider 3"
},
{
    url: "images/slider4.png",
    alt: "slider 4"
},
{
    url: "images/slider5.png",
    alt: "slider 5"
},
]

let currentIndex = 0;

const sliderBox = document.querySelector(".sliderBox");
const banner = document.createElement("img");
banner.src = images[currentIndex].url
banner.alt = images[currentIndex].alt
banner.classList.add("slider-image");
sliderBox.appendChild(banner);

const previousSliderButton = document.querySelector(".previous-slider");
const nextSliderButton = document.querySelector(".next-slider");
const sliderNavigation = document.querySelector(".slider-navigation");

for (let i = 0; i < images.length; i++) {
    const navigationButton = document.createElement("button");
    navigationButton.classList.add("navigation-button");
    sliderNavigation.appendChild(navigationButton);
    navigationButton.addEventListener("click", () => {
        currentIndex = i;
        updateSlider();
    });
}

const updateSlider = () => {
    banner.src = images[currentIndex].url;
    banner.alt = images[currentIndex].alt;

   previousSliderButton.classList.toggle("non-navigation", currentIndex === 0);
   nextSliderButton.classList.toggle("non-navigation", currentIndex === images.length - 1);

   document.querySelectorAll(".navigation-button").forEach((button, index) => {
    button.classList.toggle("active", index === currentIndex);
});
}

previousSliderButton.addEventListener("click", () => {
    if(currentIndex > 0 ){
        currentIndex--;
        updateSlider();
    }
}
)

nextSliderButton.addEventListener("click", () => {
    if(currentIndex < images.length-1 ){
        currentIndex++;
        updateSlider();
    }
}
)

updateSlider();


