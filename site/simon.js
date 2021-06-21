// This file contains the game logic.
// All the event-listening should happen in buttons.js

bigBox = document.querySelector('.simon-container');
start = document.querySelector('.start');
orderSentence = document.querySelector('.order');
startAgain = document.querySelector('.restart');

let listOriginal = ['green','red','yellow','blue'];
let listPlayer = [];
let listColor = [];

function createColor(){   //v7
    randomColor = listOriginal[Math.floor(Math.random()* listOriginal.length)]
    return randomColor;
}
function remainClicks(){
    remaining = listColor.length - listPlayer.length;
    document.querySelector('.clicks').innerHTML = `Remaining clicks: ${remaining}`;
}

function startGame(){
    start.classList.add('hidden');
    orderSentence.classList.remove('hidden');
    listColor.push(createColor());
    document.querySelector('#colors').innerHTML = listColor;
    bigBox.classList.remove('unclickable');
    remainClicks();
}

function resetGame(){
    listColor = [];
    listPlayer = [];
    start.classList.remove('hidden');
    orderSentence.classList.add('hidden');
    startAgain.classList.add('hidden');
    document.querySelector('.result').innerHTML = "";
    document.querySelector('.clicks').innerHTML = "";
}

function bigCompare(tile){
    listPlayer.push(tile);

    for(i=0; i<listPlayer.length; i++) {
        if(listPlayer[i] === listColor[i]){
            document.querySelector('.result').innerHTML = 'Yes!';
            remainClicks();
            if(listPlayer.length === listColor.length){
                if(listPlayer[listPlayer.length - 1] === listColor[listColor.length - 1]){
                    listPlayer = []
                    document.querySelector('.result').innerHTML = 'Congrats! Next round!';
                    listColor.push(createColor());
                    document.querySelector('#colors').innerHTML = listColor;
                    remainClicks();
                }
                else{
                    document.querySelector('.result').innerHTML = 'Wrong tile!';
                    startAgain.classList.remove('hidden');
                    bigBox.classList.add('unclickable');
                    return;
                }
                
            }
        }
        else{
            document.querySelector('.result').innerHTML = 'Wrong tile!';
            startAgain.classList.remove('hidden');
            bigBox.classList.add('unclickable');
            return;
        }
    }
}

bigBox.classList.add('unclickable');

start.addEventListener('click', function(){
    startGame();
})

bigBox.addEventListener('click', function(event){
    tile = event.target.id;
    bigCompare(tile); //v7
});

startAgain.addEventListener('click', function(){
    resetGame();
}) //v7

