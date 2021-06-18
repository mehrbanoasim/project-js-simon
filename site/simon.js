// This file contains the game logic.
// All the event-listening should happen in buttons.js
let greenBox= document.getElementById("green");
let redBox= document.getElementById("red");
let yellowBox= document.getElementById("yellow");
let blueBox= document.getElementById("blue");



let colorList = ['red','blue','blue','green'];
let playList = [];

bigBox = document.querySelector('.simon-container');

/*bigBox.onclick = function(){
    numClicked++;
    document.querySelector('#clicktimes').innerHTML = numClicked;
}*/

document.querySelector('#colors').innerHTML = colorList[0]
let numClicked = 0;

function compare(listOriginal, listPlayer){
    for(i=0; i<listPlayer.length; i++){
        if(listPlayer[i] === listOriginal[i]){
            document.querySelector('.result').innerHTML = 'Congrats!';
            document.querySelector('#colors').innerHTML = listOriginal[i+1];
            if((i+1)>=listOriginal.length){
                document.querySelector('.result').innerHTML = 'Congrats! You win!';
                document.querySelector('.order').innerHTML = "No more clicks!";
            }
        }
        else{
            document.querySelector('.result').innerHTML = 'Game Over!'; 
        }
    }

}

bigBox.addEventListener('click', function(event){
    tile = event.target.id;
    console.log(tile);
    playList.push(tile);
    console.log(playList);

    compare(colorList, playList)
    
})