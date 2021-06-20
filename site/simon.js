// This file contains the game logic.
// All the event-listening should happen in buttons.js
let greenBox= document.getElementById("green");
let redBox= document.getElementById("red");
let yellowBox= document.getElementById("yellow");
let blueBox= document.getElementById("blue");

bigBox = document.querySelector('.simon-container');
start = document.querySelector('.start');
orderSentence = document.querySelector('.order');
startAgain = document.querySelector('.restart');

let listOriginal = ['green','red','yellow','blue'];
let listPlayer = [];
let listColor = [];

/*randomColor = listOriginal[Math.floor(Math.random()* listOriginal.length)];
listColor.push(randomColor);*/


function createColor(){
    randomColor = listOriginal[Math.floor(Math.random()* listOriginal.length)]
    return randomColor;
}

/*function compare(listColor, listPlayer, listOriginal){
    createColorOrder(listOriginal, listColor);
    for(i=0; i<listPlayer.length; i++){
        if(listPlayer[i] === listColor[i]){
            document.querySelector('.result').innerHTML = 'Congrats!';
            document.querySelector('#colors').innerHTML = listColor;
            if((i+1)>=listColor.length){
                document.querySelector('.result').innerHTML = 'Congrats! You win!';
                document.querySelector('.order').innerHTML = "No more clicks!";
            }
        }
        else{
            document.querySelector('.result').innerHTML = 'Game Over!'; 
        }
    }

}

function pairUp(listPlayer, listColor){
    for(i=0; i<listPlayer.length; i++){
        if(listPlayer[i] === listColor[i]){
            document.querySelector('.result').innerHTML = 'Congrats!';
            if(listPlayer.length >= listColor.length){
                document.querySelector('.result').innerHTML = 'Congrats! You win!';
                document.querySelector('.order').innerHTML = "No more clicks!";
            }
        }
        else{
            document.querySelector('.result').innerHTML = 'Game Over!'
        }
        
    }
}*/

function remainClicks(){
    remaining = listColor.length - listPlayer.length;
    document.querySelector('.clicks').innerHTML = `Remaining clicks: ${remaining}`;
}

function startGame(){
    start.classList.add('hidden');
    orderSentence.classList.remove('hidden');
    listColor.push(createColor());
    document.querySelector('#colors').innerHTML = listColor;
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
                }
                
            }
        }
        else{
            document.querySelector('.result').innerHTML = 'Wrong tile!';
            startAgain.classList.remove('hidden');
        }
    }
}

start.addEventListener('click', function(){
    startGame();
})

bigBox.addEventListener('click', function(event){
    tile = event.target.id;

    bigCompare(tile);
});

startAgain.addEventListener('click', function(){
    resetGame();
})

