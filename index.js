console.log("hello world")


//High Priority List =========================================================

let addList = document.querySelector('#ahForm')
addList.addEventListener('submit', highList)

function highList(input) {
    input.preventDefault()
    
    let stuff = document.querySelector('#h-input').value
    let newLi = document.createElement('li')
    const text = document.createTextNode(stuff)
    const element = document.getElementById('h-p')

    newLi.appendChild(text)
    element.appendChild(newLi)
    console.log(stuff)

    
    let delet = document.createElement('button')
    delet.textContent = 'X'
    delet.addEventListener('click', deleteList)
    newLi.appendChild(delet)
}

//Low Priority List ===========================================================

let addlList = document.querySelector('#alForm')
addlList.addEventListener('submit', lowList)

function lowList(input) {
    input.preventDefault()
    
    let stuff = document.querySelector('#l-input').value
    let newLi = document.createElement('li')
    const text = document.createTextNode(stuff)
    const element = document.getElementById('l-p')

    newLi.appendChild(text)
    element.appendChild(newLi)
    console.log(stuff)

    
    let delet = document.createElement('button')
    delet.textContent = 'X'
    delet.addEventListener('click', deleteList)
    newLi.appendChild(delet)
}

//Global Pieces =============================================================

function deleteList(event) {
    event.target.parentNode.remove()
    // Message.textContent = 'Deleted'
    // revealMessage()
}




//Attempting to work with server ==========================================================

// console.log('Hello World')

// let highPriorityList = setInterval(getList, 1)

// function getList (e) {
//     e.preventDefault()
//     axios.get("http://localhost4500/api/hList")
//         .then(function (res) {
//             const data = res.data
//             document.getElementById('h-p').innerHTML = data
//             console.log(data)
//         })
// }


// function addHiList (input){
//     input.preventDefault()
//     let hInput = document.querySelector('#h-input').value
//     axios.post("http://localhost4500/api/hList", {hInput})
//         .then(
//             alert("New list added")
//         )
    
//     const list = document.createElement('li')
    
//     hP.textContent = inputField.value
    
//     list.appendChild(hP)

//     inputField.value = ''
//     console.log('new list added')
// }

// let hiBtn = document.querySelector('#ahForm')
// hiBtn.addEventListener('submit', addHiList)