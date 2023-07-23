document.addEventListener('DOMContentLoaded', function(){
    const menubutton=document.querySelector(".menu");
    if(menubutton){
        menubutton.addEventListener('click', function(){
            menubutton.classList.toggle("active");
        });
    }
});