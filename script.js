document.addEventListener('DOMContentLoaded', () => {
   
    const btn = document.getElementById('details-btn');
    const text = document.getElementById('details-text');

    if (btn && text) {
        btn.addEventListener('click', () => {
            text.classList.toggle('hidden');
            btn.textContent = text.classList.contains('hidden') ? 'Подробнее' : 'Скрыть';
        });
    }

    
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); 
            const input = document.getElementById('email');
            const msg = document.getElementById('form-message');
            const email = input.value.trim();

            
            const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            if (!valid) {
                msg.textContent = 'Введите корректную почту.';
                msg.className = 'form-message error';
                return;
            }

            msg.textContent = `Спасибо! Ваша почта сохранена: ${email}`;
            msg.className = 'form-message success';
            form.reset();
        });
    }
});