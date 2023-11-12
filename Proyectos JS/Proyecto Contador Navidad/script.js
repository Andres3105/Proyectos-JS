const botonIniciar = document.getElementById("boton1")
const botonDetener = document.getElementById("boton2")
function obtenerTiempoFaltante(fechaLimite){
    let ahora = new Date();
    const tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;
    const segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    const minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    const horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    const diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);

    return {
        tiempoFaltante,
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes
    }
};

let sonido = new Audio('./sounds/audio.mp3')

const tiempoDestino ='Nov 08 2023 23:36:00 GMT-0500'

const reproducirMusica = () =>{
    const tiempoActual = obtenerTiempoFaltante(tiempoDestino)
    if (tiempoActual.tiempoFaltante <= 0) {
        sonido.play()   
    }
}
const detenerMusica = () =>{
    sonido.pause()
}
function cuentaRegresiva(tiempoFaltante, mensaje){
    const dias = document.getElementById('dias')
    const horas = document.getElementById('horas')
    const minutos = document.getElementById('minutos')
    const segundos = document.getElementById('segundos')

    const tiempoActual = setInterval( () => {
        let t = obtenerTiempoFaltante(tiempoFaltante);  
        dias.innerHTML = `${t.diasFaltantes}`;
        horas.innerHTML = `${t.horasFaltantes}`
        minutos.innerHTML = `${t.minutosFaltantes}`
        segundos.innerHTML = `${t.segundosFaltantes}`
        if(t.tiempoFaltante <= 1){
            const papaNoel = document.getElementById("imagen")
            papaNoel.src = "./img/papa_noel_gif.gif"
            clearInterval(tiempoActual);
            const c = document.getElementById("mensaje")
            c.innerHTML = mensaje;
            dias.innerHTML = `00`;
            horas.innerHTML = `00`
            minutos.innerHTML = `00`
            segundos.innerHTML = `00`
            botonIniciar.classList.add("red")
            botonDetener.classList.add("red")
        }
    }, 1000)
};

cuentaRegresiva(tiempoDestino, '¡Feliz Navidad!');