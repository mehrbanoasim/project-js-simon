// This file contains the game logic.
// All the event-listening should happen in buttons.js
let greenBox= document.getElementById("green");
let redBox= document.getElementById("red");
let yellowBox= document.getElementById("yellow");
let blueBox= document.getElementById("blue");



let listOriginal = ['green','red','yellow','blue'];
let listPlayer = [];
let listColor = [];

randomColor = listOriginal[Math.floor(Math.random()* listOriginal.length)];
listColor.push(randomColor);

bigBox = document.querySelector('.simon-container');

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


function bigCompare(tile){
    listPlayer.push(tile);

    for(i=0; i<listPlayer.length; i++) {
        if(listPlayer[i] === listColor[i]){
            document.querySelector('.result').innerHTML = 'Yes!';
            if(listPlayer.length === listColor.length){
                listPlayer = []
                document.querySelector('.result').innerHTML = 'Congrats! Next round!';
                listColor.push(createColor());
                document.querySelector('#colors').innerHTML = listColor;
            }
        }
        else{
            document.querySelector('.result').innerHTML = 'Wrong tile!';
            return;
        }
    }
}

document.querySelector('#colors').innerHTML = listColor;

bigBox.addEventListener('click', function(event){
    tile = event.target.id;

    bigCompare(tile);
});

