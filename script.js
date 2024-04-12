document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const menuContent = document.getElementById('menu-content');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    menuBtn.addEventListener('click', function() {
        menuContent.style.display = menuContent.style.display === 'none' ? 'block' : 'none';
    });

    prevBtn.addEventListener('click', function() {
        scrollCarousel(-200); // ajusta el valor según la cantidad que quieras que se desplace
    });

    nextBtn.addEventListener('click', function() {
        scrollCarousel(200); // ajusta el valor según la cantidad que quieras que se desplace
    });

    function scrollCarousel(amount) {
        const carousel = document.querySelector('.carousel');
        carousel.scrollLeft += amount;
    }
});


