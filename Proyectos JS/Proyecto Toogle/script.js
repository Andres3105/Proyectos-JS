const body = document.querySelector("body");
const toogle = document.getElementById("toogle");

toogle.addEventListener("click", () =>{
    toogle.classList.toggle("toogleBlanco");
    body.classList.toggle("toogleBlanco");
})