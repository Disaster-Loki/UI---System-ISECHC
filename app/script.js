// Toggle para tema claro/escuro
const themeButton = document.getElementById('toggle-theme');
const body = document.body;
const container = document.querySelector('.container');

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
    themeButton.innerHTML = body.classList.contains('dark-mode') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});
