function atualizaRelogio() {
    let tempo = new Date();
    let horasAtuais = String(tempo.getHours()).padStart(2, '0');
    let minutosAtuais = String(tempo.getMinutes()).padStart(2, '0');
    let segundosAtuais = String(tempo.getSeconds()).padStart(2, '0');

    document.getElementById("horas").textContent = horasAtuais;
    document.getElementById("minutos").textContent = minutosAtuais;
    document.getElementById("segundos").textContent = segundosAtuais;

    const btAlternar = document.getElementById("btotao");
    const btIniciar = document.getElementById("bt-iniciar");
    const btPausar = document.getElementById("bt-pausar");
    const btZerar = document.getElementById("bt-zerar");

   


}
atualizaRelogio();
setInterval(atualizaRelogio, 1000);
