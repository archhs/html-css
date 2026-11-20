const btn = document.getElementById('details-btn');
const text = document.getElementById('details-text');

btn.addEventListener('click', () => {
    text.classList.toggle('hidden');
    btn.textContent = text.classList.contains('hidden') ? 'Подробнее' : 'Скрыть';
});