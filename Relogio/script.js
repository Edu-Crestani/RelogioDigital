const btnAlternar = document.getElementById('botao');
const btnIniciar = document.getElementById('bt-iniciar');
const btnPausar = document.getElementById('bt-pausar');
const btnZerar = document.getElementById('bt-zerar');

const elHoras = document.getElementById('horas');
const elMinutos = document.getElementById('minutos');
const elSegundos = document.getElementById('segundos');

let modoAtual = 'relogio';
let cronometroSegundos = 0;
let cronometroMinutos = 0;
let cronometroHoras = 0;
let intervaloCronometro;

function atualizarVisorCronometro() {
    elHoras.textContent = String(cronometroHoras).padStart(2, '0');
    elMinutos.textContent = String(cronometroMinutos).padStart(2, '0');
    elSegundos.textContent = String(cronometroSegundos).padStart(2, '0');
}

btnAlternar.addEventListener('click', function () {
    if (modoAtual === 'relogio') {
        modoAtual = 'cronometro';
        btnAlternar.textContent = 'Relógio';

        btnIniciar.classList.remove('oculto');
        btnPausar.classList.remove('oculto');
        btnZerar.classList.remove('oculto');

        atualizarVisorCronometro();
    } else {
        modoAtual = 'relogio';
        btnAlternar.textContent = 'Alternar';

        btnIniciar.classList.add('oculto');
        btnPausar.classList.add('oculto');
        btnZerar.classList.add('oculto');

        clearInterval(intervaloCronometro);
        atualizarRelogio();
    }
});

function atualizarRelogio() {
    if (modoAtual === 'relogio') {
        const agora = new Date();
        elHoras.textContent = String(agora.getHours()).padStart(2, '0');
        elMinutos.textContent = String(agora.getMinutes()).padStart(2, '0');
        elSegundos.textContent = String(agora.getSeconds()).padStart(2, '0');
    }
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();

function rodarCronometro() {
    cronometroSegundos++;

    if (cronometroSegundos === 60) {
        cronometroSegundos = 0;
        cronometroMinutos++;
    }
    if (cronometroMinutos === 60) {
        cronometroMinutos = 0;
        cronometroHoras++;
    }

    atualizarVisorCronometro();
}

btnIniciar.addEventListener('click', function () {
    clearInterval(intervaloCronometro);
    intervaloCronometro = setInterval(rodarCronometro, 1000);
});

btnPausar.addEventListener('click', function () {
    clearInterval(intervaloCronometro);
});

btnZerar.addEventListener('click', function () {
    clearInterval(intervaloCronometro);
    cronometroSegundos = 0;
    cronometroMinutos = 0;
    cronometroHoras = 0;
    atualizarVisorCronometro();
});