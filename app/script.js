// JavaScript para controle de interatividade

// Toggle para tema claro/escuro
const themeButton = document.getElementById('toggle-theme');
const body = document.body;

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Simulação de controle de dispositivos
const pumpStatus = document.getElementById('pump-status');
const valveStatus = document.getElementById('valve-status');
const systemStatus = document.getElementById('system-status');

document.getElementById('toggle-pump').addEventListener('click', () => {
    if (pumpStatus.textContent === 'Off') {
        pumpStatus.textContent = 'On';
        pumpStatus.classList.remove('off');
        pumpStatus.classList.add('on');
    } else {
        pumpStatus.textContent = 'Off';
        pumpStatus.classList.remove('on');
        pumpStatus.classList.add('off');
    }
});

document.getElementById('toggle-valve').addEventListener('click', () => {
    if (valveStatus.textContent === 'Closed') {
        valveStatus.textContent = 'Open';
        valveStatus.classList.remove('closed');
        valveStatus.classList.add('open');
    } else {
        valveStatus.textContent = 'Closed';
        valveStatus.classList.remove('open');
        valveStatus.classList.add('closed');
    }
});

// Exemplo simples de interação Python (simulado)
function logEvent(event) {
    const logsList = document.querySelector('.logs-list');
    const logItem = document.createElement('li');
    logItem.textContent = `Log: ${event}`;
    logItem.classList.add('log-item');
    logsList.prepend(logItem); // Adiciona no início da lista
}

// Simulação de eventos e logs
logEvent('Sistema iniciado às 08:00');
logEvent('Bomba acionada às 08:30');
logEvent('Ajuste de pH realizado às 09:15');
logEvent('Última irrigação às 10:00');
