const NUM_PLANTS = 50
const NUM_POKEBALLS= 6

const player =document.querySelector('.player')
const player_pos = {
    x: parseInt(window.innerWidth / 2),
    y: parseInt(window.innerHeight / 2)
}

const player_vel = {
    x: 0,
    y: 0
}

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

function run(){
    player_pos.x += player_vel.x
    player_pos.y += player_vel.y

    player.style.left = player_pos.x + 'px'
    player.style.bottom = player_pos.y + 'px'
    
    checkCollisions()

    requestAnimationFrame(run)
}


function init(){
    createPlants()
    createPokeBalls()
    run()
}

init()

window.addEventListener('keydown', function(e){
    if(e.key == "ArrowUp"){
        player_vel.y = 3
        player.style.backgroundImage = 'url("assets/player_front.png")'
    }
    if(e.key == "ArrowDown"){
        player_vel.y = -3
        player.style.backgroundImage = 'url("assets/player_back.png")'
    }
    if(e.key == "ArrowLeft"){
        player_vel.x = -3
        player.style.backgroundImage = 'url("assets/player_left.png")'
    }
    if(e.key == "ArrowRight"){
        player_vel.x = 3
        player.style.backgroundImage = 'url("assets/player_right.png")'
    }
    player.classList.add('active')
})
window.addEventListener('keyup', function(){
    player_vel.x = 0
    player_vel.y = 0
    player.classList.remove('active')
})