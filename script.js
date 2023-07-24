const menubutton = document.querySelector(".menu");
const navigation = document.querySelector(".nav");
menubutton.addEventListener("click", ()=>{
    menubutton.classList.toggle("active");
    navigation.classList.toggle("active");
    }
);