const menubutton = document.querySelector(".menu");
const navigation = document.querySelector(".nav");
menubutton.addEventListener("click",() => {
    menubutton.classList.toggle("active");
    navigation.classList.toggle("active");
    }
);
const sliderbtn = document.querySelectorAll(".slider");
const  slides= document.querySelectorAll(".slidevideo");
const  themes= document.querySelectorAll(".theme");
var slidernavigation = function(manual){

    sliderbtn.forEach((button)=>{
        button.classList.remove("active");
    });
    slides.forEach((sd)=>{
        sd.classList.remove("active");
    });
    themes.forEach((th)=>{
        th.classList.remove("active");
    });

    sliderbtn[manual].classList.add("active");
    slides[manual].classList.add("active");
    themes[manual].classList.add("active");
};
sliderbtn.forEach((button,i)=>{
    button.addEventListener("click",()=>{
        slidernavigation(i);
    });
});