let logo = document.querySelector('.wrapper-inner');
let menu = document.querySelector(".menu");

logo.addEventListener("click", function (){
    menu.classList.toggle('showmenu');
});