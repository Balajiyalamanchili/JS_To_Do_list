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
    checkbox.style.width = '20px'
    checkbox.style.marginRight = '8px'

    let text = document.querySelector('input');

    let content1 = document.createElement('div');
    content1.innerText = text.value
    content1.style.color = '#354463'
    content1.style.font = 'normal normal bold 16px/20px Helvetica;'
    // console.log(checkbox)
    text.value = null; // optional: clears the input

    let deleteMove = document.createElement('div');
    deleteMove.setAttribute('class', 'deleteMove');


    added.prepend(newdiv);
    newdiv.prepend(checkbox)
    newdiv.append(content1)


    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            // console.log(`Checked: ${text.value}`);
            content1.style.textDecoration = 'line-through';
            newdiv.style.backgroundColor = '#FF033E'
            // checkbox.style.backgroundColor = 'green'
            content1.style.color = 'black'

        } else {
            // console.log(`Unchecked: ${text.value}`);
            content1.style.textDecoration = 'none';

            newdiv.style.backgroundColor = '#C1F7D5'
            content1.style.color = '#354463'

        }
    });
    var ans = 1;
    newdiv.addEventListener('mouseenter', () => {
        
        let deleteplease = document.createElement('button');
        deleteplease.textContent = 'Remove'
        // deleteplease.style.borderRadius = '100px'
        deleteplease.style.border = '0'
        if (ans === 1) {
            deleteplease.style.backgroundColor = 'pink'
            newdiv.append(deleteplease)
            newdiv.style.justifyContent = 'space-between'
            ans = 0
            deleteplease.addEventListener('click', () => {
                alert(`Deleted a To Do Task with Content in it : ${content1.innerText}`)

                added.removeChild(newdiv)
            })

            deleteplease.addEventListener('mouseenter', () => {
                deleteplease.style.backgroundColor = '#FF033E';
            });

            deleteplease.addEventListener('mouseleave', () => {
                deleteplease.style.backgroundColor = 'pink';
            });
        }
        // else {

        //     newdiv.removeChild(newdiv.lastElementChild);
        //     ans = 1
        //     newdiv.style.justifyContent = 'initial'
        // }
    })
    newdiv.addEventListener('mouseleave', () => {
        newdiv.removeChild(newdiv.lastElementChild);
            ans = 1
            newdiv.style.justifyContent = 'initial'
    })
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
