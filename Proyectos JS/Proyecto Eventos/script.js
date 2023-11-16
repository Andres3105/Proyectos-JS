let eventos = [];
let info = []; 

const nombreEvento = document.querySelector("#nombreEvento");
const fechaEvento = document.querySelector("#fechaEvento");
const añadir = document.querySelector("#añadir");
const contenedorEventos = document.querySelector("#contenedorEventos");

const memoria = cargar();
try {
    info = JSON.parse(memoria);
} catch (error) {
    info = [];
}
eventos = info ? [...info] : [];
renderizarEventos();

document.querySelector('form').addEventListener("submit", (e) =>{
    e.preventDefault();
    añadirEvento();
});

añadir.addEventListener("click", (e) =>{
    e.preventDefault();
    añadirEvento();
});

function añadirEvento() {
    if (nombreEvento.value === "" || fechaEvento.value === "") {
        return;
    }
    if (diferenciaFechas(fechaEvento.value)<0) {
        return;
    }
    const nuevoEvento = {
        id: Math.random().toString(36).slice(3),
        nombre: nombreEvento.value,
        fecha: fechaEvento.value,
    };
    eventos.unshift(nuevoEvento);
    guardar(JSON.stringify(eventos));
    nombreEvento.value = "";
    renderizarEventos();
}

function diferenciaFechas(fechaEvento) {
    const fechaLimite = new Date(fechaEvento);
    const fechaActual = new Date();
    const diferencia = fechaLimite.getTime() - fechaActual.getTime();
    const diasFaltantes = Math.ceil(diferencia / (1000 * 3600 * 24))
    return diasFaltantes;
}

function renderizarEventos() {
    const eventosHTML = eventos.map((evento) => {
        return `
        <div class="evento">
            <div class="dias">
                <span class="numeroDias">${diferenciaFechas(evento.fecha)}</span>
                <span class="diasTexto">días</span>
            </div>
            <div class="nombreEvento">${evento.nombre}</div>
            <div class="fechaEvento">${evento.fecha}</div>
            <div class="actions">
                <button data-id="${evento.id}" class="eliminar">Eliminar</button>
            </div>
        </div>
        `
    });
    contenedorEventos.innerHTML = eventosHTML.join("");
    document.querySelectorAll(".eliminar").forEach(botonEliminar =>{
        botonEliminar.addEventListener('click', e =>{
            const id = botonEliminar.getAttribute('data-id');
            eventos = eventos.filter(evento => evento.id !== id);
            guardar();
            renderizarEventos();
        });
    });
}

function guardar(data) {
    localStorage.setItem("items", data);
}

function cargar() {
    return localStorage.getItem("items");
}