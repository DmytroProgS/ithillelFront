import './style.css';

import slider1 from './images/slider1.png';
import slider2 from './images/slider2.png';
import slider3 from './images/slider3.png';
import slider4 from './images/slider4.png';
import slider5 from './images/slider5.png';

import previousSlide from './images/previous-slide.jpg';
import nextSlide from './images/next-slide.jpg';

const images = [
    { url: slider1, alt: "slider 1" },
    { url: slider2, alt: "slider 2" },
    { url: slider3, alt: "slider 3" },
    { url: slider4, alt: "slider 4" },
    { url: slider5, alt: "slider 5" },
];

let currentIndex = 0;

const sliderBox = document.querySelector(".sliderBox");
const banner = document.createElement("img");
banner.src = images[currentIndex].url
banner.alt = images[currentIndex].alt
banner.classList.add("slider-image");
sliderBox.appendChild(banner);

const previousSliderButtonImg = document.querySelector(".previous-slider img");
previousSliderButtonImg.src = previousSlide;
previousSliderButtonImg.alt = "Previous Slide";

const nextSliderButtonImg = document.querySelector(".next-slider img");
nextSliderButtonImg.src = nextSlide;
nextSliderButtonImg.alt = "Next Slide";

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


