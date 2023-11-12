const navegacion = document.querySelector(".menuPrincipal")
const abrir = document.querySelector(".abrirMenu")
const cerrar = document.querySelector(".cerrarMenu")

abrir.addEventListener("click", () =>{
    navegacion.classList.add("visible");
});

cerrar.addEventListener("click", () =>{
    navegacion.classList.remove("visible")
})