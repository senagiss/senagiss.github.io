document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function() {
            this.classList.toggle('open');
        });
    });

    const addButtons = document.querySelectorAll('.add-btn');
    addButtons.forEach(addButton => {
        addButton.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const buttonText = input.value.trim();
            if (buttonText !== '') {
                const newButton = document.createElement('button');
                newButton.textContent = buttonText;
                this.parentElement.insertBefore(newButton, this);
                input.value = '';
            }
        });
    });
});
