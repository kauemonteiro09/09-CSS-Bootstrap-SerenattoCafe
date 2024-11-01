// Choise.js
document.addEventListener('DOMContentLoaded', function () {
    const element = document.getElementById('floatingSelect');
    const choices = new Choices(element, {
        placeholder: true,
        placeholderValue: '',
        searchEnabled: false, // Desativa a barra de pesquisa se você não precisa dela
        itemSelectText: '', // Remove o texto padrão de seleção
    });
});

//Dark-Mode
const inputCheck = document.querySelector('#dark-mode');
const element = document.querySelector('body');

inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked ? 'dark' : 'light';
    element.setAttribute('data-bs-theme', modo);
});
