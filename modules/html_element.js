export function createElement(element) {
    return document.createElement(element);
}

export function addText(elem, content) {
    elem.textContent = content;
}

export function removeItems(item, parent) {
        parent.removeChild(item);
}

export function deleteAllLi(parent, array) {   
    for (let i = 0; i < array.length; i++) {
        const item = array[i].querySelector(".checkbox")
        if (item.checked) {
            parent.removeChild(array[i]);
        }
    }
}

export function addItems(parent, children, array_childrens) {
    for (let i = 0; i < array_childrens.length; i++) {
        children.appendChild(array_childrens[i]);
    }
    parent.appendChild(children);
}