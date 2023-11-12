const marcoPuntaje = document.querySelector('.puntaje');
let puntajeActual = 0;
const puntajeLimite = 5;

const htmlMapa = Array.from(Array(puntajeLimite)).map((item, i) =>{
    return `<div class="item item-${i}" data-pos="${i}"></div>`;
});
marcoPuntaje.innerHTML = htmlMapa.join('');
document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("mouseover", e =>{
        // console.log("Funciona");
        const posicion = item.getAttribute("data-pos");

        if (puntajeActual === parseInt(posicion) + 1) {
            return;
        }

        document.querySelectorAll(".item").forEach(cuadraditoGris =>{
            if (cuadraditoGris.classList.contains("selec")) {
                cuadraditoGris.classList.remove("selec");
            }
        });

        for (let i = 0; i <= posicion; i++) {
            const cuadradito = document.querySelector(`.item-${i}`);
            if (!cuadradito.classList.contains("selec")) {
                cuadradito.classList.add("selec");
            }
        }
        puntajeActual = parseInt(posicion) + 1;
    });
    item.addEventListener("click", (e) =>{
        const posicion = item.getAttribute("data-pos");
        puntajeActual = parseInt(posicion) + 1;
        console.log(puntajeActual);
    });
});