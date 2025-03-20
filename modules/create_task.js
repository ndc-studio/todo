import { createElement, addText, addItems, removeItems} from "./html_element.js";
import { checkedListColor} from "./colors.js"
import { saveTasks } from "./storage.js";

/**
 * @var {number} numId -- contient un nombre qui sera incrementé pour chaque entrée utilisateur
 * sera ajoué a l'id du boutton supprimer afin de créer des id uniques pour chaque boutons.
 *
 */
let numId = 0;


export function createTask(value, boolean) {
    /** @const {HTMLElement} list -- Cible la liste <ul> */
    const list = document.getElementById("list");

    /** @const {function} li -- Crée un element <li>*/
    const li = createElement("li");

    /** @const {function} li -- Crée un element <li>*/
    const span = createElement("span");

    /** @const {function} checkbox -- Crée un element <input>*/
    const checkbox = createElement("input");

    /** @const {function} label -- Crée un element <label>*/
    const label = document.createElement('label');

    /** @const {function} button -- Crée un element <button>*/
    const button = createElement("button");

    /** @descrtiption -- Initialise le type="checkbox" pour <input>*/
    checkbox.type = "checkbox";

    /** @description -- Ajoute une class="checkbox" à <input> */
    checkbox.classList = "checkbox";

    checkbox.checked = boolean;

    /** @description -- Ajoute une class="del" à <button> */
    button.classList = "del";
    
    /** @description -- Ajoute un id unique grace a numId, à <button> */
    button.id = "del-button" + numId;
    /** @description -- Incrémente numId */
    numId++;

    /** @description -- Appelle la fonction addText(elem, content) pour ajouter du textContent*/
    addText(label, 'Finished');
    addText(button, "🗑️ Delete");
    addText(span, value);

    /** @description -- Ajoute un écouteur d'evenement de type clic sur le <button> supprimer */
    button.addEventListener("click", function() {
        /** @description -- Appelle la fonction removeItems(items, parent) afin de supprimer tout les elements du array*/
        removeItems(li, list);
        saveTasks();
    });

    /** @description -- Ajoute un écouteur d'evenement de type clic sur le <input> checkbox */
    checkbox.addEventListener("change", function() {
        /** @description -- Appelle la fonction checkedListColor(elem, item, color1, color2, textDecoration) afin de changer la couleur en fonction de l'etat de l'element <input> checkbox */
        checkedListColor(li, checkbox, "rgb(184, 255, 118)", "rgb(214, 214, 214)", "line-through");
        saveTasks();
    });
    
    if (checkbox.checked) {
        /** @description -- Appelle la fonction checkedListColor(elem, item, color1, color2, textDecoration) afin de changer la couleur en fonction de l'etat de l'element <input> checkbox */
        checkedListColor(li, checkbox, "rgb(184, 255, 118)", "rgb(214, 214, 214)", "line-through");
    }

    /** @const {array[string]} childrens -- Contient tout les éléments à ajouter à l'envoi du formulaire */
    const childrens = [span, checkbox, label, button];
    /** @description -- Appelle la fonction addItems(parent, children, array_childrens) pour ajouter tout les elements du array*/
    addItems(list, li, childrens);

}