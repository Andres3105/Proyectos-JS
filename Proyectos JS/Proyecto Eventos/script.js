let eventos = [];
let arr = []; 
const nombreEvento = document.querySelector("#nombreEvento")
const fechaEvento = document.querySelector("#fechaEvento")
const botonAgregar = document.querySelector("#agregar")
const listaEventos = document.querySelector("#listaEventos")


const guardar = (datos) =>{
    localStorage.setItem("lista", datos)
}
const cargar = () =>{
    return localStorage.getItem("lista")
}

const json = cargar()

document.querySelector("form").addEventListener("submit", e =>{
    e.preventDefault()
    agregarEvento()
})

const diferenciaFecha = (fechaEvento) => {
    let fechaDestino = new Date(fechaEvento)
    let fechaActual = new Date()
    let diferencia = fechaDestino.getTime() - fechaActual.getTime()
    return Math.ceil(diferencia / (1000 * 3600 * 24))
}


function agregarEvento() {
    if (nombreEvento.value === "" || fechaEvento.value === "") {
        alert("No se admiten campos vacíos")
        return
    }

    if (diferenciaFecha(fechaEvento.value) < 0) {
        alert("La fecha es anterior a la actual")
        return
    }

    const nuevoEvento = {
        id: (Math.random() * 100).toString(36).slice(3),
        nombre : nombreEvento.value,
        fecha : fechaEvento.value
    }

    eventos.unshift(nuevoEvento)
    guardar(JSON.stringify(eventos))

    nombreEvento.value = ""

    mostrarEventos();
}

const mostrarEventos = () => {
    const eventosHTML = eventos.map((evento) => {
        return `
        <div class="evento">
            <div class="dias">
                <span class="diasFaltantes">${diferenciaFecha(evento.fecha)}</span>
                <span class="texto"><span>días</span> para</span>
            </div> 
            <div class="nombreEvento"><span>${evento.nombre}</span></div>
            <div class="fechaEvento">${evento.fecha}</div>
            <div class="acciones">
                <button data-id="${evento.id}" class="eliminar">Eliminar</button>
            </div>
        </div>
        `
    })
    listaEventos.innerHTML = eventosHTML.join("")
    document.querySelectorAll(".eliminar").forEach(button => {
        button.addEventListener("click", () =>{
            const id = button.getAttribute("data-id")
            eventos = eventos.filter(evento => evento.id !== id)
            guardar(JSON.stringify(eventos))
            mostrarEventos()
        })
    })
}

try {
    arr = JSON.parse(json)
} catch (error) {
    arr = []
}
eventos = arr? [...arr] : []

mostrarEventos()
