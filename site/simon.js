// This file contains the game logic.
// All the event-listening should happen in buttons.js
let greenBox= document.getElementById("green");
let redBox= document.getElementById("red");
let yellowBox= document.getElementById("yellow");
let blueBox= document.getElementById("blue");

let colorList = ['red','blue','blue','green'];
let playList = [];

bigBox = document.querySelector('.simon-container');

document.querySelector('#colors').innerHTML = colorList[0]

bigBox.addEventListener('click', function(event){
    tile = event.target.id;
    console.log(tile);
    playList.push(tile);
    console.log(playList);

    for(i=0; i<=playList.length; i++){
        if(playList[i] === colorList[i]){
            document.querySelector('.result').innerHTML = 'Congrats!';
            document.querySelector('#colors').innerHTML = colorList[i+1];
            if((i+1)>colorList.length){
                document.querySelector('.result').innerHTML = 'Congrats! You win!';
                document.querySelector('#colors').innerHTML = "";
            }
        }
        else{
            document.querySelector('.result').innerHTML = 'Game Over!';
        }
    }

})