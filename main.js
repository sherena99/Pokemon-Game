const NUM_PLANTS = 50


function createPlants(){
    for(let i = 0; i < NUM_PLANTS; i++){
        const div = document.createElement('div')
        div.classList.add('plant')
        div.style.left = Math.random() * 100 + '%'
        div.style.top = Math.random() * 100 + '%'
        document.body.appendChild(div)
    }
}

function init(){
    createPlants()
}

init()