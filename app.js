let added = document.getElementById('added-items')
let localStore = localStorage.getItem('balaji')

if (localStore!== null) {
    let predefineddata = JSON.parse(localStore)
    predefineddata.reverse()
    for (let data of predefineddata) {

        let newdiv = document.createElement('div');
        newdiv.style.backgroundColor = '#C1F7D5';
        newdiv.style.margin = '10px';
        newdiv.style.color = 'black';
        newdiv.style.padding = '10px 0px 10px 0px';
        newdiv.style.fontWeight = 'bold';
        newdiv.style.display = 'flex'
        newdiv.style.justifyContent = 'none'
        newdiv.setAttribute('class', 'divesof')

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox'
        checkbox.style.marginRight = '8px'
        checkbox.style.marginLeft = '8px'
        checkbox.checked = data[0]


        // let text = document.querySelector('input');

        let content1 = document.createElement('div');
        // content1.innerText = text.value   //here
        content1.innerText = data[1]
        content1.style.color = '#354463'
        content1.style.font = 'normal normal bold 16px/20px Helvetica;'
        content1.style.wordBreak = 'break-word'
        // content1.style.overflowWrap = 'break-word'
        // content1.style.justifyContent = 'center'

        // text.value = null; // optional: clears the input

        let checkboxContent = document.createElement('div');
        checkboxContent.style.display = 'flex'
        checkboxContent.prepend(checkbox)
        checkboxContent.append(content1)

        let deleteMove = document.createElement('div');
        deleteMove.setAttribute('class', 'deleteMove');
        deleteMove.style.display = 'flex'

        let deleteplease = document.createElement('button');
        deleteplease.textContent = '❌'
        // deleteplease.textContent = '\u{1F5D1}';
        // deleteplease.style.borderRadius = '100px'
        deleteplease.style.border = '0'
        deleteplease.style.marginRight = '10px'
        deleteplease.style.height = '20px'
        deleteplease.style.width = '20px'


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



        deleteMove.prepend(deleteplease)
        deleteMove.prepend(movedown)
        deleteMove.prepend(moveup)

        newdiv.prepend(checkboxContent)
        added.prepend(newdiv);
        // console.log(added)
        // // console.log(added.replaceWith(newdiv))
        // console.log(added)
        if (data[0] === true) {
            content1.style.textDecoration = 'line-through';
            newdiv.style.backgroundColor = '#FF4D73'

            content1.style.color = 'black'

            newdiv.append(deleteMove)
            newdiv.style.justifyContent = 'space-between'
            deletedisplay = true;
            data[0] = false
        }


        deleteplease.addEventListener('click', () => {
            alert(`Deleted a To Do Task with Content in it : ${content1.innerText}`)
            added.removeChild(newdiv)
        })
        deleteplease.addEventListener('mouseenter', () => {
            deleteplease.style.backgroundColor = '#FF033E';
        });
        deleteplease.addEventListener('mouseleave', () => {
            deleteplease.style.backgroundColor = 'white'//#C1F7D5';
        });


        movedown.addEventListener('click', (downevent) => {
            let currentDiv = downevent.srcElement.parentElement.parentElement;
            let nextDiv = currentDiv.nextElementSibling
            added.insertBefore(nextDiv, currentDiv); // Swap
        })
        movedown.addEventListener('mouseenter', () => {
            movedown.style.backgroundColor = '#FF033E';
        });
        movedown.addEventListener('mouseleave', () => {
            movedown.style.backgroundColor = 'white'//#C1F7D5';
        });

        moveup.addEventListener('click', (upevent) => {
            let currentDiv = upevent.srcElement.parentElement.parentElement;
            let previousDiv = currentDiv.previousElementSibling
            added.insertBefore(currentDiv, previousDiv);

        })
        moveup.addEventListener('mouseenter', () => {
            moveup.style.backgroundColor = '#FF033E';
        });
        moveup.addEventListener('mouseleave', () => {
            moveup.style.backgroundColor = 'white'//#C1F7D5';
        });

        var deletedisplay = false;
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                content1.style.textDecoration = 'line-through';
                newdiv.style.backgroundColor = '#FF4D73'

                content1.style.color = 'black'

                newdiv.append(deleteMove)
                newdiv.style.justifyContent = 'space-between'
                deletedisplay = true;
            } else if (deletedisplay === true) {
                content1.style.textDecoration = 'none';

                newdiv.style.backgroundColor = '#C1F7D5'
                content1.style.color = '#354463'
                deletedisplay = false

                newdiv.removeChild(newdiv.lastElementChild);

            }
        });
        var ans = 1;
        if (deletedisplay === false) {
            newdiv.addEventListener('mouseenter', () => {

                if (deletedisplay === false) {
                    newdiv.append(deleteMove)
                    newdiv.style.justifyContent = 'space-between'
                    ans = 0
                    newdiv.style.backgroundColor = '#7FBD9F'
                }
            })
            newdiv.addEventListener('mouseleave', () => {
                if (deletedisplay === false) {
                    // newdiv.style.backgroundColor = 'gray'
                    // setTimeout(() => {
                    newdiv.removeChild(deleteMove);
                    ans = 1
                    newdiv.style.backgroundColor = '#C1F7D5'
                    newdiv.style.justifyContent = 'initial'
                    // },1000)
                }
            })
        }
    }
}

let form = document.querySelector('form');

let namekey = 'balaji'

form.onsubmit = (event) => {
    event.preventDefault(); // 🔥 This stops the form from reloading the page

    let newdiv = document.createElement('div');
    newdiv.style.backgroundColor = '#C1F7D5';
    newdiv.style.margin = '10px';
    newdiv.style.color = 'black';
    newdiv.style.padding = '10px 0px 10px 0px';
    newdiv.style.fontWeight = 'bold';
    newdiv.style.display = 'flex'
    newdiv.style.justifyContent = 'none'
    newdiv.setAttribute('class', 'divesof')

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox'
    checkbox.style.marginRight = '8px'
    checkbox.style.marginLeft = '8px'


    let text = document.querySelector('input');

    let content1 = document.createElement('div');
    content1.innerText = text.value
    content1.style.color = '#354463'
    content1.style.font = 'normal normal bold 16px/20px Helvetica;'
    content1.style.wordBreak = 'break-word'
    // content1.style.overflowWrap = 'break-word'
    // content1.style.justifyContent = 'center'

    text.value = null; // optional: clears the input

    let checkboxContent = document.createElement('div');
    checkboxContent.style.display = 'flex'
    checkboxContent.prepend(checkbox)
    checkboxContent.append(content1)

    let deleteMove = document.createElement('div');
    deleteMove.setAttribute('class', 'deleteMove');
    deleteMove.style.display = 'flex'

    let deleteplease = document.createElement('button');
    deleteplease.textContent = '❌'
    // deleteplease.textContent = '\u{1F5D1}';
    // deleteplease.style.borderRadius = '100px'
    deleteplease.style.border = '0'
    deleteplease.style.marginRight = '10px'
    deleteplease.style.height = '20px'
    deleteplease.style.width = '20px'


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



    deleteMove.prepend(deleteplease)
    deleteMove.prepend(movedown)
    deleteMove.prepend(moveup)

    newdiv.prepend(checkboxContent)
    added.prepend(newdiv);
    // console.log(added)
    // // console.log(added.replaceWith(newdiv))
    // console.log(added)

    deleteplease.addEventListener('click', () => {
        alert(`Deleted a To Do Task with Content in it : ${content1.innerText}`)
        added.removeChild(newdiv)
    })
    deleteplease.addEventListener('mouseenter', () => {
        deleteplease.style.backgroundColor = '#FF033E';
    });
    deleteplease.addEventListener('mouseleave', () => {
        deleteplease.style.backgroundColor = 'white'//#C1F7D5';
    });


    movedown.addEventListener('click', (downevent) => {
        let currentDiv = downevent.srcElement.parentElement.parentElement;
        let nextDiv = currentDiv.nextElementSibling
        added.insertBefore(nextDiv, currentDiv); // Swap
    })
    movedown.addEventListener('mouseenter', () => {
        movedown.style.backgroundColor = '#FF033E';
    });
    movedown.addEventListener('mouseleave', () => {
        movedown.style.backgroundColor = 'white'//#C1F7D5';
    });

    moveup.addEventListener('click', (upevent) => {
        let currentDiv = upevent.srcElement.parentElement.parentElement;
        let previousDiv = currentDiv.previousElementSibling
        added.insertBefore(currentDiv, previousDiv);

    })
    moveup.addEventListener('mouseenter', () => {
        moveup.style.backgroundColor = '#FF033E';
    });
    moveup.addEventListener('mouseleave', () => {
        moveup.style.backgroundColor = 'white'//#C1F7D5';
    });

    var deletedisplay = false;
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            content1.style.textDecoration = 'line-through';
            newdiv.style.backgroundColor = '#FF4D73'

            content1.style.color = 'black'

            newdiv.append(deleteMove)
            newdiv.style.justifyContent = 'space-between'
            deletedisplay = true;
        } else if (deletedisplay === true) {
            content1.style.textDecoration = 'none';

            newdiv.style.backgroundColor = '#C1F7D5'
            content1.style.color = '#354463'
            deletedisplay = false

            newdiv.removeChild(newdiv.lastElementChild);

        }
    });
    var ans = 1;
    if (deletedisplay === false) {
        newdiv.addEventListener('mouseenter', () => {

            if (deletedisplay === false) {
                newdiv.append(deleteMove)
                newdiv.style.justifyContent = 'space-between'
                ans = 0
                newdiv.style.backgroundColor = '#7FBD9F'
            }
        })
        newdiv.addEventListener('mouseleave', () => {
            if (deletedisplay === false) {
                // newdiv.style.backgroundColor = 'gray'
                // setTimeout(() => {
                newdiv.removeChild(deleteMove);
                ans = 1
                newdiv.style.backgroundColor = '#C1F7D5'
                newdiv.style.justifyContent = 'initial'
                // },1000)
            }
        })
    }
};


// setInterval(() => {
//     localStorage.setItem('balaji',JSON.stringify(added.innerHTML))
// }, 10)
// console.log(added)



setInterval(() => {
    let elements = added.getElementsByClassName('divesof')
    var l = []
    for (let k of elements) {
        let dicto = [k.firstChild.firstChild.checked, k.firstChild.lastChild.innerText]
        l.push(dicto)
    }
    // console.log(l)
    localStorage.setItem(namekey, JSON.stringify(l))
    // localStorage.removeItem(namekey);


}, 1)