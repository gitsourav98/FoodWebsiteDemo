
window.onload=function(){
/*toggle navbar */
const navToggler = document.querySelector('.nav-toggler');

 navToggler.addEventListener("click",toggleNav);
function toggleNav(){
    let nav = document.querySelector(".nav");
    // navToggler.classList.toggle("active");
    nav.classList.toggle("open");
    
    
}}
