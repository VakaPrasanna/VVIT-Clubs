const menubutton = document.querySelector(".menu");
const navigation = document.querySelector(".nav");
menubutton.addEventListener("click", ()=>{
    menubutton.classList.toggle("active");
    navigation.classList.toggle("active");
    }
);
const sliderbtn = document.querySelectorAll(".slider");
var slidernavigation = function(manual){
    sliderbtn.forEach((button)=>{
        button.classList.remove("active");
    });
    sliderbtn[manual].classList.add("active");
}
sliderbtn.forEach((button,i)=>{
    button.addEventListener("click",()=>{
        slidernavigation(i);
    });
});