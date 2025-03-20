import { saveTheme, loadTheme } from "./storage.js";

export function checkedListColor(elem, item, color1, color2, textDecoration) {
    if (item.checked) {
        elem.style.textDecoration = textDecoration;
        elem.style.backgroundColor = color1;
    } else {
        elem.style.textDecoration = "none";
        elem.style.backgroundColor = color2;
    }
}

export function colorMode() {
    const colorMode = document.getElementById('color-mode');

    loadTheme();

    colorMode.addEventListener('change', function () {
        const selectedOption = colorMode.options[colorMode.selectedIndex];
        
        if (selectedOption.id === 'dark-mode') {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else if (selectedOption.id === 'light-mode') {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        }
        saveTheme();
    });
}