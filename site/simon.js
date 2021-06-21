// This file contains the game logic.
// All the event-listening should happen in buttons.js

/*let greenBox= document.getElementById("green");
let redBox= document.getElementById("red");
let yellowBox= document.getElementById("yellow");
let blueBox= document.getElementById("blue");*/

bigBox = document.querySelector('.simon-container');
start = document.querySelector('.start');
orderSentence = document.querySelector('.order');
startAgain = document.querySelector('.restart');

let listOriginal = ['green','red','yellow','blue'];
let listPlayer = [];
let listColor = [];

/*orderSentence.classList.remove('hidden');
start.classList.add('hidden');
startAgain.classList.add('hidden');
document.querySelector('.result').innerHTML = `Round 1`;*/


/*colorOrder = ['red','blue','blue','green']; //v4
document.querySelector('#colors').innerHTML = colorOrder[0]; 

function compareFixedSeq(tile){
    listPlayer.push(tile);

    for(i=0; i<listPlayer.length; i++) {
        if(listPlayer[i] === colorOrder[i]){
            document.querySelector('#colors').innerHTML = colorOrder[i+1];
            document.querySelector('.result').innerHTML = `Congrats! Round ${i+2}!`;
            if((i+1) >= colorOrder.length) {
                document.querySelector('.result').innerHTML = 'Congrats! You win!';
            }
        }
        else{
            document.querySelector('.result').innerHTML = 'Sorry! Wrong tile!';
        }
    }
}  //v4 */


/*randomColor = listOriginal[Math.floor(Math.random()* listOriginal.length)]; //v5
listColor.push(randomColor);
document.querySelector('#colors').innerHTML = listColor[0]; 

function createColor(){
    randomColor = listOriginal[Math.floor(Math.random()* listOriginal.length)]
    return randomColor;
}

function compare(tile){
    listPlayer.push(tile);
    listColor.push(createColor());

    for(i=0; i<listPlayer.length; i++){
        if(listPlayer[i] === listColor[i]){
            document.querySelector('.result').innerHTML = `Congrats! Round ${i+2}!`;
            document.querySelector('#colors').innerHTML = listColor[i+1];
            /*if((i+1)>=listColor.length){
                document.querySelector('.result').innerHTML = 'Congrats! You win!';
                document.querySelector('.order').innerHTML = "No more clicks!";
            }
        }
        else{
            document.querySelector('.result').innerHTML = 'Wrong tile! Game Over!';
            return; 
        }
    }

} //v5 */

/*colorOrder = ['red','yellow','blue','green']; //v6-1
document.querySelector('#colors').innerHTML = colorOrder;

function pairUp(tile){
    listPlayer.push(tile);

    for(i=0; i<listPlayer.length; i++){
        if(listPlayer[i] === colorOrder[i]){
            document.querySelector('.result').innerHTML = `Congrats! Round ${i+2}!`;
            if(listPlayer.length >= colorOrder.length){
                document.querySelector('.result').innerHTML = 'Congrats! You win!';
                document.querySelector('.order').innerHTML = "No more clicks!";
            }
        }
        else{
            document.querySelector('.result').innerHTML = 'Game Over!'
        }
        
    }
} //v6-1 */

/*function createColor(){    //v6-2
    randomColor = listOriginal[Math.floor(Math.random()* listOriginal.length)]
    return randomColor;
}
j=0;
while(j<5){
    listColor[j] = createColor();
    j++;
}
document.querySelector('#colors').innerHTML = listColor;
function compareRandom(tile){
    listPlayer.push(tile);

    for(i=0; i<listPlayer.length; i++){
        if(listPlayer[i] === listColor[i]){
            document.querySelector('.result').innerHTML = `Congrats! Round ${i+2}!`;
            if((i+1) >= listColor.length){
                document.querySelector('.result').innerHTML = 'Congrats! You win!';
                document.querySelector('.order').innerHTML = "No more clicks!";
            }
        }
        else{
            document.querySelector('.result').innerHTML = 'Game Over!'
        }
        
    }

} //v6-2  */

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
    //bigBox.classList.add('unclickable');
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
                    return;
                }
                
            }
        }
        else{
            document.querySelector('.result').innerHTML = 'Wrong tile!';
            startAgain.classList.remove('hidden');
            return;
        }
    }
}



start.addEventListener('click', function(){
    startGame();
})

bigBox.addEventListener('click', function(event){
    tile = event.target.id;
    bigCompare(tile); //v7

    //compareFixedSeq(tile); //v4

    //compare(tile); //v5

    //pairUp(tile); //v6-1

    //compareRandom(tile); //v6-2
});

startAgain.addEventListener('click', function(){
    resetGame();
}) //v7

