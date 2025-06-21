let added = document.getElementById('added-items')
// // console.log(added)
// let btn = document.querySelector('button')

// btn.onclick = (res)=>{
//     let text = document.querySelector('input')
//     // console.log(text.value)
//     // console.log(res)
//     let newdiv = document.createElement('div')
//     newdiv.innerText = text.value
// newdiv.setAttribute('id', 'text1')
//     newdiv.style.backgroundColor = 'red'
//     newdiv.style.margin = '10px' 
//     newdiv.style.borderRadius = '30px'
//     newdiv.style.color = 'white'
//     added.prepend(newdiv)
//     // text.value=''
// }


let form = document.querySelector('form');

form.onsubmit = (event) => {
    event.preventDefault(); // 🔥 This stops the form from reloading the page

    let newdiv = document.createElement('div');
    // newdiv.innerText = text.value;
    newdiv.style.backgroundColor = '#C1F7D5';
    newdiv.style.margin = '10px';
    // newdiv.style.borderRadius = '30px';
    newdiv.style.color = 'black';
    newdiv.style.padding = '10px 0px 10px 0px';
    newdiv.style.fontWeight = 'bold';
    newdiv.style.display = 'flex'
    newdiv.style.justifyContent = 'none'
    newdiv.setAttribute('class', 'divesof')
    // newdiv.display = 'flex';
    // newdiv.style.alignItems = 'center'

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox'
    // checkbox.style.width = '20px'
    checkbox.style.marginRight = '8px'
    checkbox.style.marginLeft = '8px'


    let text = document.querySelector('input');

    let content1 = document.createElement('div');
    content1.innerText = text.value
    content1.style.color = '#354463'
    content1.style.font = 'normal normal bold 16px/20px Helvetica;'
    content1.style.wordBreak = 'break-word'
    content1.style.overflowWrap = 'break-word'
    content1.style.justifyContent = 'center'
    // console.log(checkbox)
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

    let moveup = document.createElement('button');
    moveup.textContent = '⬆️'
    // moveup.style.borderRadius = '100px'
    moveup.style.border = '0'
    moveup.style.marginRight = '10px'


    let movedown = document.createElement('button');
    movedown.textContent = '⬇️'
    // moveup.style.borderRadius = '100px'
    movedown.style.border = '0'
    movedown.style.marginRight = '10px'


    deleteMove.prepend(deleteplease)
    deleteMove.prepend(movedown)
    deleteMove.prepend(moveup)



    newdiv.prepend(checkboxContent)
    added.prepend(newdiv);





    deleteplease.addEventListener('click', () => {
        alert(`Deleted a To Do Task with Content in it : ${content1.innerText}`)
        added.removeChild(newdiv)
    })
    deleteplease.addEventListener('mouseenter', () => {
        deleteplease.style.backgroundColor = '#FF033E';
    });
    deleteplease.addEventListener('mouseleave', () => {
        deleteplease.style.backgroundColor = '#C1F7D5';
    });


    movedown.addEventListener('click', (downevent) => {
        let currentDiv = downevent.srcElement.parentElement.parentElement;
        let nextDiv = currentDiv.nextElementSibling
        added.insertBefore(nextDiv, currentDiv); // 🔁 Swap
        // if (nextDiv) {
        //     added.insertBefore(nextDiv, currentDiv); // 🔁 Swap
        // } else {
        //     alert("No next item to swap with.");
        // }
    })
    movedown.addEventListener('mouseenter', () => {
        movedown.style.backgroundColor = '#FF033E';
    });
    movedown.addEventListener('mouseleave', () => {
        movedown.style.backgroundColor = '#C1F7D5';
    });

    moveup.addEventListener('click', (upevent) => {
        let currentDiv = upevent.srcElement.parentElement.parentElement;
        let previousDiv = currentDiv.previousElementSibling
        added.insertBefore( currentDiv,previousDiv);
        // if (previousDiv) {
        //     added.insertBefore( currentDiv,previousDiv); //Swap to previous
        // } else {
        //     alert("No previous item to swap with.");
        // }

    })
    moveup.addEventListener('mouseenter', () => {
        moveup.style.backgroundColor = '#FF033E';
    });
    moveup.addEventListener('mouseleave', () => {
        moveup.style.backgroundColor = '#C1F7D5';
    });

    var deletedisplay = false;
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            // console.log(`Checked: ${text.value}`);
            content1.style.textDecoration = 'line-through';
            newdiv.style.backgroundColor = '#FF4D73'
            // checkbox.style.backgroundColor = 'green'
            content1.style.color = 'black'

            newdiv.append(deleteMove)
            newdiv.style.justifyContent = 'space-between'
            deletedisplay = true;
        } else if (deletedisplay === true) {
            // console.log(`Unchecked: ${text.value}`);
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

                // deleteplease.addEventListener('click', () => {
                //     alert(`Deleted a To Do Task with Content in it : ${content1.innerText}`)
                //     added.removeChild(newdiv)
                // })

                // deleteplease.addEventListener('mouseenter', () => {
                //     deleteplease.style.backgroundColor = '#FF033E';
                // });

                // deleteplease.addEventListener('mouseleave', () => {
                //     deleteplease.style.backgroundColor = 'pink';
                // });
                // deleteplease.style.backgroundColor = 'pink'
                newdiv.append(deleteMove)
                newdiv.style.justifyContent = 'space-between'
                ans = 0
                newdiv.style.backgroundColor = '#7FBD9F'
                // }
                // else {

                //     newdiv.removeChild(newdiv.lastElementChild);
                //     ans = 1
                //     newdiv.style.justifyContent = 'initial'
            }
        })
        newdiv.addEventListener('mouseleave', () => {
            if (deletedisplay === false) {
                newdiv.removeChild(deleteMove);
                ans = 1
                newdiv.style.backgroundColor = '#C1F7D5'

                newdiv.style.justifyContent = 'initial'
            }
        })
    }
    /********Up down *******/
    // var ans = 1;
    // newdiv.addEventListener('click', () => {
    //     let deleteplease = document.createElement('button');
    //     deleteplease.textContent = 'Delete'
    //     deleteplease.style.borderRadius = '100px'
    //     deleteplease.style.border = '0'
    //     if (ans === 1) {
    //         deleteplease.style.backgroundColor = 'pink'
    //         newdiv.append(deleteplease)
    //         newdiv.style.justifyContent = 'space-between'
    //         ans = 0
    //         deleteplease.addEventListener('click', (helphand) => {
    //             // alert(`Deleted a To Do Task with Content in it : ${content1.innerText}`)

    //             // added.removeChild(newdiv)

    //             // console.log(added.getElementsByTagName('div'),helphand)
    //             // let currentDiv = helphand.srcElement.parentElement;
    //             // console.log(currentDiv)
    //             // console.log(added.querySelectorAll('.divesof')[0])
    //             // let allDivs = added.querySelectorAll('.divesof')

    //             // let temp = allDivs[0].cloneNode(true);
    //             // let second = allDivs[1].cloneNode(true);

    //             // allDivs[0].replaceWith(second);
    //             // allDivs[1].replaceWith(temp);
    //             // let temp = added.querySelectorAll('.divesof')[0]
    //             // added.querySelectorAll('.divesof')[0] = added.querySelectorAll('.divesof')[1]
    //             // added.querySelectorAll('.divesof')[1]=temp
    //             // let nextDiv = currentDiv.nextElementSibling

    //             // if (nextDiv) {
    //             //     added.insertBefore(nextDiv, currentDiv); // 🔁 Swap
    //             // } else {
    //             //     alert("No next item to swap with.");
    //             // }


    //         })

    //         deleteplease.addEventListener('mouseenter', () => {
    //             deleteplease.style.backgroundColor = '#FF033E';
    //         });

    //         deleteplease.addEventListener('mouseleave', () => {
    //             deleteplease.style.backgroundColor = 'pink';
    //         });
    //     }
    //     else {

    //         newdiv.removeChild(newdiv.lastElementChild);
    //         ans = 1
    //         newdiv.style.justifyContent = 'initial'
    //     }
    // })

    // console.log(added.getElementsByTagName)
};

// document.addEventListener('')
