'use strict';

const phoneModal = document.getElementById('phoneModal');
const closeModal = document.getElementById('closeModal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Проверяем, если это третий блок
            if (entry.target.classList.contains('block3')) {
                phoneModal.style.display = 'block';
            }
        }
    });
}, {
    threshold: 0.5
});

observer.observe(document.querySelector('.block3'));


closeModal.addEventListener('click', () => {
    phoneModal.style.display = 'none';
});