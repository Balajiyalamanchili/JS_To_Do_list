// This function updates my local storage when ever I do changes in the To Do List------------------------------------
function updateDataToLocalStorage() {
    let toDoLists = added.getElementsByClassName('divesof')
    let storeData = []
    for (let task of toDoLists) {
        let dicto = [task.firstChild.firstChild.checked, task.firstChild.lastChild.innerText]
        storeData.push(dicto)
    }
    localStorage.setItem('balaji', JSON.stringify(storeData))
    // localStorage.removeItem('balaji');
}

// Creating Elements-----------------------------------------------------------------

function createNewDiv() {
    let newdiv = document.createElement('div');
    newdiv.style.backgroundColor = '#C1F7D5';
    newdiv.style.margin = '10px';
    newdiv.style.color = 'black';
    newdiv.style.padding = '10px 0px 10px 0px';
    newdiv.style.fontWeight = 'bold';
    newdiv.style.display = 'flex'
    newdiv.style.justifyContent = 'none'
    newdiv.setAttribute('class', 'divesof')
    return newdiv
}

function createNewCheckbox() {
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox'
    checkbox.style.marginRight = '8px'
    checkbox.style.marginLeft = '8px'
    return checkbox
}

function createNewContentDiv(whatToDo) {
    let content = document.createElement('div');
    content.innerText = whatToDo
    content.style.color = '#354463'
    content.style.font = 'normal normal bold 16px/20px Helvetica;'
    content.style.wordBreak = 'break-word'
    return content
}

function createDeleteButton() {
    let deleteButton = document.createElement('button');
    deleteButton.textContent = '❌'
    // deleteplease.textContent = '\u{1F5D1}';
    deleteButton.style.border = '0'
    deleteButton.style.marginRight = '10px'
    deleteButton.style.height = '20px'
    deleteButton.style.width = '20px'
    return deleteButton
}

function createMovesButton() {
    let moveup = document.createElement('button');
    moveup.textContent = '⬆️'
    moveup.style.border = '0'
    moveup.style.marginRight = '10px'
    moveup.style.height = '20px'
    moveup.style.width = '20px'

    let movedown = document.createElement('button');
    movedown.textContent = '⬇️'
    movedown.style.border = '0'
    movedown.style.marginRight = '10px'
    movedown.style.height = '20px'
    movedown.style.width = '20px'
    return [moveup, movedown]
}

// Merging elements into new divs ----------------------------------------------------------------

function mergeCheckboxAndContent(checkbox, content) {
    let checkboxContent = document.createElement('div');
    checkboxContent.style.display = 'flex'
    checkboxContent.prepend(checkbox)
    checkboxContent.append(content)
    return checkboxContent
}

function mergeDeleteAndMoves(deleteButton, movedown, moveup) {
    let deleteAndMoves = document.createElement('div');
    deleteAndMoves.setAttribute('class', 'deleteMove');
    deleteAndMoves.style.display = 'flex'
    deleteAndMoves.prepend(deleteButton)
    deleteAndMoves.prepend(movedown)
    deleteAndMoves.prepend(moveup)
    return deleteAndMoves
}


// Event Listeners--------------------------------------------------------------------------------

function deleteButtonEventlisteners(deleteButton, content, newdiv) {
    deleteButton.addEventListener('click', () => {
        alert(`Deleted a To Do Task with Content in it : ${content.innerText}`)
        added.removeChild(newdiv)
        updateDataToLocalStorage()

    })
    deleteButton.addEventListener('mouseenter', () => {
        deleteButton.style.backgroundColor = '#FF033E';
    });
    deleteButton.addEventListener('mouseleave', () => {
        deleteButton.style.backgroundColor = 'white'//#C1F7D5';
    });
}

function movesEventlisteners(moveup, movedown) {
    movedown.addEventListener('click', (downevent) => {
        let currentDiv = downevent.srcElement.parentElement.parentElement;
        let nextDiv = currentDiv.nextElementSibling
        added.insertBefore(nextDiv, currentDiv); // Swap
        updateDataToLocalStorage()

    })
    movedown.addEventListener('mouseenter', () => {
        movedown.style.backgroundColor = 'lime'; //color #FF033E
    });
    movedown.addEventListener('mouseleave', () => {
        movedown.style.backgroundColor = 'white'//#C1F7D5';
    });

    moveup.addEventListener('click', (upevent) => {
        let currentDiv = upevent.srcElement.parentElement.parentElement;
        let previousDiv = currentDiv.previousElementSibling
        added.insertBefore(currentDiv, previousDiv);
        updateDataToLocalStorage()
    })
    moveup.addEventListener('mouseenter', () => {
        moveup.style.backgroundColor = 'lime';
    });
    moveup.addEventListener('mouseleave', () => {
        moveup.style.backgroundColor = 'white'//#C1F7D5';
    });
}

function checkboxEventListeners(newdiv, checkbox, content, deleteAndMoves) {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            content.style.textDecoration = 'line-through';
            newdiv.style.backgroundColor = '#FF4D73'
            content.style.color = 'black'
            newdiv.append(deleteAndMoves)
            newdiv.style.justifyContent = 'space-between'
            updateDataToLocalStorage()

        }
        else {
            content.style.textDecoration = 'none';
            newdiv.style.backgroundColor = '#C1F7D5'
            content.style.color = '#354463'
            newdiv.removeChild(newdiv.lastElementChild);
            updateDataToLocalStorage()

        }
    });
}

function ShowDeleteAndMoves(newdiv, checkbox, deleteAndMoves) {
    newdiv.addEventListener('mouseenter', () => {
        if (checkbox.checked != true) {
            newdiv.append(deleteAndMoves)
            newdiv.style.justifyContent = 'space-between'
            newdiv.style.backgroundColor = '#7FBD9F'
        }
    })
    newdiv.addEventListener('mouseleave', () => {
        if (checkbox.checked != true) {
            newdiv.removeChild(deleteAndMoves);
            newdiv.style.backgroundColor = '#C1F7D5'
            newdiv.style.justifyContent = 'initial'
        }
    })
}


function pushNewDiv(whatToDo) {
    let newdiv = createNewDiv()
    let checkbox = createNewCheckbox()
    let content = createNewContentDiv(whatToDo)
    let checkboxContent = mergeCheckboxAndContent(checkbox, content)
    let deleteButton = createDeleteButton()
    let [moveup, movedown] = createMovesButton()
    let deleteAndMoves = mergeDeleteAndMoves(deleteButton, movedown, moveup)
    newdiv.prepend(checkboxContent)
    return [newdiv, checkbox, movedown, moveup, deleteButton, content, deleteAndMoves]
}


function main(whatToDo, checkboxValue) {

    let [newdiv, checkbox, movedown, moveup, deleteButton, content, deleteAndMoves] = pushNewDiv(whatToDo)

    added.prepend(newdiv);

    deleteButtonEventlisteners(deleteButton, content, newdiv)
    movesEventlisteners(moveup, movedown)
    checkboxEventListeners(newdiv, checkbox, content, deleteAndMoves)
    ShowDeleteAndMoves(newdiv, checkbox, deleteAndMoves)

    if (checkboxValue == true) {
        checkbox.checked = true
        checkbox.dispatchEvent(new Event('change'));
    }
    updateDataToLocalStorage()
}


// Code Starts Here -------------------------------------------------------------------------------------------------------------------------------->

let form = document.querySelector('form');

let namekey = 'balaji';

let added = document.getElementById('added-items')

// Loading To Do content from Local Storage

let localStore = localStorage.getItem(namekey)
if (localStore !== null) {
    let predefineddata = JSON.parse(localStore)
    predefineddata.reverse()
    for (let data of predefineddata) {
        let whatToDoContent = data[1]
        let checkboxValue = data[0]
        main(whatToDoContent,checkboxValue)
    }
}

// starts when the form submit button is clicked

form.onsubmit = (event) => {
    event.preventDefault(); // This stops the form from reloading the page

    let whatToDoInput = document.querySelector('input');
    let whatToDoContent = whatToDoInput.value
    whatToDoInput.value = null
    let checkboxValue = false 
    
    main(whatToDoContent, checkboxValue)
};