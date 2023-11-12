let esqueleto = "off";
let esqueletoStop = document.getElementById("esqueletoquieto");
let botonSonido = new Audio ("./sound/botonbailar.mp3");
let botonMusica = new Audio ("./sound/audio.mp3")

function Bailar() {
    if (esqueleto == "off") {
        esqueleto = "on";
        esqueletoStop.classList.add("on");
        esqueletoStop.addEventListener("click", ()=>{
            botonSonido.play();
        })
        esqueletoStop.addEventListener("click", ()=>{
            botonMusica.play();
        })
        console.log("On");
    } else {
        esqueleto = "off"
        esqueletoStop.classList.remove("on")
        esqueletoStop.addEventListener("click", ()=>{
            botonMusica.pause();
        })
        console.log("Off");
    }
}