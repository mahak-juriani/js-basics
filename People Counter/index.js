let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0
function increment(){
    count += 1
    countEl.innerText = count
    console.log(count)
}

function save(){
    console.log(count)
    saveEl.textContent += count + " - "
    count = 0
    countEl.innerText = count
}
