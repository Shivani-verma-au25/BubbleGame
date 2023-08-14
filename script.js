var timer = 10
var hit = 0
var Score = 0


// increase Score 
function Topscore(){
    Score += 10
    document.querySelector("#increasescore").innerHTML = Score
}
// create hit values
function hitValue(){
    hit = Math.floor(Math.random()*10)
    document.querySelector('#hitval').innerHTML = hit
}

// create hitboard

function setTimer(){
    let setInt = setInterval(function(){
        if (timer > 0) {
            timer--;
                document.querySelector('#time').textContent = timer
        } else {
            clearInterval(setInt)
            // setTimer()
            document.querySelector('#center').innerHTML =`<h1>Game Over</h1>`
        }
    },1000)
}

// creating randome bubbles
function createBubble(){
    var clutter = "";
    for (let i = 0; i<=151; i++) {
        // creating random numbers
        var raNum = Math.floor(Math.random()*10)  
        clutter += `<div class="bubble">${raNum}</div>`
    }
document.querySelector('#center').innerHTML = clutter
}

// compairing bubble to hit

function compaireBubble(){
    document.querySelector('#center').addEventListener('click',function(event){
        var clicked_bubble = Number(event.target.textContent);
    //    console.log(clicked_bubble);
        if (clicked_bubble === hit) {
          Topscore()
          createBubble()
          hitValue()
        }
    })
}
createBubble()
setTimer()
hitValue()
compaireBubble()



