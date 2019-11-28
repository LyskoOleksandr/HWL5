const inp = document.querySelector('input');
const btn = document.querySelector('button');
const btnVip = document.getElementById('vip')
const list = document.querySelector('ul');
function getInputValue(inp) {
    let myValue = '';
    if (inp !== '') {
        myValue = inp.value;
        return myValue;
    }
}
function createElementWithText(elementName, text) {
    let elem = document.createElement(elementName);
    elem.innerHTML = text;
    return elem;
}
function appendChildToDo(parent, child) {
    parent.appendChild(child);
}
btn.addEventListener('click', () => {
    if (getInputValue(inp)) {
        let child = createElementWithText('li', getInputValue(inp));
        appendChildToDo(list, child);
    }
})
btnVip.addEventListener('click', () => {
    if (getInputValue(inp)) {
        let child = createElementWithText('li', getInputValue(inp));
        let firstE = list.firstElementChild;
        list.insertBefore(child, firstE);
        child.classList.add('it-red');
    }
})
