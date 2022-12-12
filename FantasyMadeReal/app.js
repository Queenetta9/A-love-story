// Navbar Toggle
let btn = document.querySelector(".btn");

btn.addEventListener("click", ()=>{
    let mobileNav = document.querySelector(".mobile-nav");
    mobileNav.classList.toggle("toggle");
})

// Onscroll function
// window.onscroll = function () {
//   myFunction();
// };


// function myFunction(){
//     if (document.documentElement.scrollTop > 100){
//         document.querySelector(".aboutUs, .aboutUs Text").className = "slideUp";
//     }
// }
// window.onscroll = function () {
//   loveStory();
// };

// function loveStory() {
//   if (document.documentElement.scrollTop > 350) {
//     document.querySelector(".ourLoveStory").className = "slideUp";
//   }
// }


// Picture Slider

let slides = document.querySelectorAll(".slide");
slides.forEach((slide, index) =>{
    slide.style.transform = `translateX(${index * 100}%)`;
});
let currentSlide = 0;

let nextSlide = document.querySelector(".btn-next");

let maximumSlide = slides.length - 1;

nextSlide.addEventListener("click", ()=>{
    if (currentSlide === maximumSlide){
        currentSlide = 0
    } else{
        currentSlide++
    }

    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
});

let previousSlide = document.querySelector(".btn-prev");
previousSlide.addEventListener("click", ()=>{
    if(currentSlide === 0){
        currentSlide = maximumSlide
    } else{
        currentSlide--;
    }

    slides.forEach((slide, index) =>{
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`
    } )
});