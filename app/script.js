// JavaScript para controle de interatividade

// Toggle para tema claro/escuro
const themeButton = document.getElementById('toggle-theme');
const body = document.body;
const container = document.querySelector('.container');

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
    // Alterna entre ícones de sol e lua
    themeButton.innerHTML = body.classList.contains('dark-mode') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Simulação de controle de dispositivos com base em leituras dos sensores
const pumpStatus = document.getElementById('pump-status');
const valveStatus = document.getElementById('valve-status');
const systemStatus = document.getElementById('system-status');

// Função simulada para atualizar status dos dispositivos
function updateDeviceStatus(pumpOn, valveOpen) {
    pumpStatus.textContent = pumpOn ? 'On' : 'Off';
    valveStatus.textContent = valveOpen ? 'Open' : 'Closed';
}

// Simulação de leitura dos sensores e atualização de status
function simulateSensorReadings() {
    // Simulação de valores dos sensores
    const luminosity = Math.floor(Math.random() * 500); // exemplo de luminosidade
    const temperature = Math.floor(Math.random() * 30); // exemplo de temperatura
    const humidity = Math.floor(Math.random() * 100); // exemplo de umidade
    const pHLevel = Math.random() * (8 - 5) + 5; // exemplo de nível de pH
    const waterLevel = Math.floor(Math.random() * 100); // exemplo de nível de água

    // Atualização dos valores na interface (simulação)
    document.getElementById('luminosity').textContent = luminosity;
    document.getElementById('temperature').textContent = `${temperature}°C`;
    document.getElementById('humidity').textContent = `${humidity}%`;
    document.getElementById('ph-level').textContent = pHLevel.toFixed(1);
    document.getElementById('water-level').textContent = `${waterLevel}%`;

    // Simulação de status dos dispositivos com base nos valores dos sensores
    const pumpOn = luminosity < 200 && temperature > 25; // exemplo de condição para ligar a bomba
    const valveOpen = pHLevel < 6.5; // exemplo de condição para abrir a válvula

    updateDeviceStatus(pumpOn, valveOpen);
    // Log dos eventos simulados
    logEvent(`Leitura de sensores: Luminosidade ${luminosity}, Temperatura ${temperature}°C, Umidade ${humidity}%, pH ${pHLevel.toFixed(1)}, Nível de água ${waterLevel}%`);
}

// Simulação de atualização periódica (a cada 5 segundos)
setInterval(simulateSensorReadings, 5000);

// Simulação de registros de logs
function logEvent(event) {
    const logsList = document.querySelector('.logs-list');
    const logItem = document.createElement('li');
    logItem.textContent = event;
    logItem.classList.add('log-item');
    logsList.prepend(logItem); // Adiciona no início da lista
}

// Simulação inicial de leitura dos sensores
simulateSensorReadings();
