import { deleteAllLi } from "./modules/html_element.js";
import { colorMode } from "./modules/colors.js"
import { createTask } from "./modules/create_task.js";
import { loadTasks, saveTasks } from "./modules/storage.js";

loadTasks();

/** @const {HTMLElement} form -- Cible le formulaire <form> */
const form = document.getElementById("form");
/** @const {HTMLElement} input -- Cible l'entrée utilisateur <input> */
const input = document.getElementById("input");
/** @const {HTMLElement} reset -- Cible le <button> reset */
const reset = document.getElementById("reset");


/**
 * @type {EventListener}
 * @description -- Ajout d'un evenement pour écouter le <button> submit
 * 
 */
form.addEventListener("submit", function(event) {
    /** @description -- Petite decouverte du jour ^^ permet d'eviter le rechargement de la page a l'envoi du formulaire */
    event.preventDefault();
    createTask(input.value, false);
    input.value = "";
    saveTasks();
})

/** @description -- Appelle la fonction colorMode() pour que l'utilisateur puisse choisir entre les modes light et dark*/
colorMode();

/**
 * @type {EventListener}
 * @description -- Ajout d'un evenement pour écouter le <button> reset
 * 
 */
reset.addEventListener("click", function() {
    /** @const {HTMLElement} elemList -- Cible tout les li actuels sur la page et contenu dans la constante sous forme de tableau */
    const elemList = Array.from(document.querySelectorAll("li"));
    /** @description -- Appelle la fonction deleteAllLi(parent, array) afin de supprimer tout les elements qui sont checked*/
    deleteAllLi(list, elemList);
    saveTasks();
})
