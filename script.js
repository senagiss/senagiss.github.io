document.addEventListener('DOMContentLoaded', function() {
    const menuButtons = document.querySelectorAll('.menu-btn');
    menuButtons.forEach(button => {
        button.addEventListener('click', function() {
            const submenu = this.nextElementSibling;
            const allSubmenus = document.querySelectorAll('.submenu');
            allSubmenus.forEach(sub => {
                if (sub !== submenu) {
                    sub.style.display = 'none';
                }
            });
            submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
        });
    });
});
