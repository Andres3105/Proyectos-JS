function calcularTiempo(){
    let tiempo = new Date();
    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();
    let periodo = hora >= 12 ? 'PM' : 'AM';  

    hora = hora % 12;
    hora = hora === 0 ? 12 : hora;
    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;    
    
    let pantallaReloj = hora + ":" + minuto + ":" + segundo + " " + periodo;
    let relojDigital = document.querySelector(".reloj");
    relojDigital.innerHTML = pantallaReloj;
}
setInterval(calcularTiempo,1000);