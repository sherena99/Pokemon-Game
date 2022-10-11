const NUM_PLANTS = 50
const NUM_POKEBALLS= 6


function createPlants(){
    for(let i = 0; i < NUM_PLANTS; i++){
        const div = document.createElement('div')
        div.classList.add('plant')
        div.style.left = Math.random() * 100 + '%'
        div.style.top = Math.random() * 100 + '%'
        document.body.appendChild(div)
    }
}
function createPokeBalls(){
    for(let i=0; i<NUM_POKEBALLS; i++){
        const div = document.createElement('div')
        div.classList.add('pokeBall')
        div.style.left = Math.random() * 100 + '%'
        div.style.top = Math.random() * 100 + '%'
        document.body.appendChild(div)
    }

}

function init(){
    createPlants()
    createPokeBalls()
}

init()