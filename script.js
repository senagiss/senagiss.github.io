
const menuBtns = document.querySelectorAll('.menu-btn');
const menuContent = document.querySelector('.menu-content');

menuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const contentId = btn.textContent.toLowerCase().replace(/\s/g, '');
        const content = document.getElementById(contentId);
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            menuContent.querySelectorAll('.content').forEach(item => {
                item.style.display = 'none';
            });
            content.style.display = 'block';
        }
    });
});

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const carousel = document.querySelector('.carousel');

let counter = 0;
const size = carousel.clientWidth;

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    carousel.style.transform = `translateX(${-size * counter}px)`;
});

nextBtn.addEventListener('click', () => {
    if (counter >= 7) return; // ajusta el valor según la cantidad de imágenes
    counter++;
    carousel.style.transform = `translateX(${-size * counter}px)`;
});
