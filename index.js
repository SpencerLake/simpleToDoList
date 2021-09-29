console.log('Hello World')

function addHiList (input){
    input.preventDefault()

    let inputField = document.querySelector('#h-input')
    const list = document.createElement('li')
    let hP = document.querySelector('#h-p')
    hP.textContent = inputField.value
    
    list.appendChild(hP)

    inputField.value = ''
    console.log('new list added')
}

let hiBtn = document.querySelector('#ahForm')
hiBtn.addEventListener('submit', addHiList)