
import { createTask } from "./create_task.js";

export function saveTheme() {
    const body = document.body;
    if (body.classList.contains('dark')) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

export function loadTheme() {
    const theme = localStorage.getItem('theme');
    const colorMode = document.getElementById('color-mode');
    const lightOption = document.getElementById("light-mode");
    const darkOption = document.getElementById("dark-mode");
    if (theme === 'dark') {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
        colorMode.value = darkOption; // S'assurer que l'option "dark" est sélectionnée
    } else if (theme === 'light') {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
        colorMode.value = lightOption; // S'assurer que l'option "light" est sélectionnée
    } else {
        // Si aucune préférence n'est trouvée, définir un thème par défaut
        document.body.classList.add('light');
        document.body.classList.remove('dark');
        colorMode.value = lightOption; // Par défaut, l'option light est sélectionnée
    }
}

export function saveTasks() {
    const tasks = Array.from(document.querySelectorAll("li"));
    const tasksData = [];
    tasks.forEach(task => {
        const text = task.querySelector("span").textContent.trim();
        const box = task.querySelector(".checkbox").checked;
        let finished;
        tasksData.push({ text, box });
        console.log(tasksData)
    });
    localStorage.setItem("tasks", JSON.stringify(tasksData));
}

export function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
        tasks.forEach(task => {
            createTask(task.text, task.box);
        });
    }
}
