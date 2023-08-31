/*const header = document.querySelector("header");

window.addEventListener("scrool", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});
let menu = document.querySelector('#navbar-icon');
let navlist = document.querySelector('.navbar-header');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}
const sr = ScrollReveal({
    distance:'50px',
    duration: 2500,
    reset: true
})
sr.reveal('.home-text',{delay:350, origin:'left'})*/
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
	header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#navbar-icon');
let navlist = document.querySelector('.navbar-header');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
}
 const sr = ScrollReveal({
 	distance: '50px',
 	duration:2500,
 	reset: true
 })

 sr.reveal('.home-text',{delay:350, origin:'left'})


 //ligth e dark mode

const themeToggle = document.querySelector("#theme-toggle");
 const body = document.body;
 
 themeToggle.addEventListener("change", () => {
     if (body.classList.contains("dark-mode")) {
         body.classList.remove("dark-mode");
         console.log("dark-mode")
     } else {
         body.classList.add("dark-mode");
     }
 });
 

