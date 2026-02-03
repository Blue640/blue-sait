const thoughts = [
    "Код работает? Не трогай.",
    "Лень — это энергосберегающий режим.",
    "Бирюзовый — цвет спокойствия.",
    "Минимализм — это не отсутствие чего-то, это идеальное количество.",
    "Blue — это стиль."
];

function updateUI() {
    // Часы и дата
    const now = new Date();
    const clockEl = document.getElementById('clock');
    const dateEl = document.getElementById('date-label');
    
    if (clockEl) clockEl.innerText = now.toLocaleTimeString('ru-RU');
    if (dateEl) {
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        dateEl.innerText = now.toLocaleDateString('ru-RU', options);
    }
}

// Переключение меню
function toggleMenu() {
    document.querySelector('.hamburger').classList.toggle('active');
    document.getElementById('sidebar').classList.toggle('active');
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    // Сразу ставим цитату
    const quoteEl = document.getElementById('quote');
    if (quoteEl) {
        quoteEl.innerText = thoughts[Math.floor(Math.random() * thoughts.length)];
    }

    // Запускаем время
    updateUI();
    setInterval(updateUI, 1000);
});