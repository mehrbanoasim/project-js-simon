let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function(event) {
  flashGreen();
})

let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function() {
  flashRed();
});

let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('click', function() {
  flashYellow();
});

let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('click', function() {
  flashBlue();
});

function flashGreen() {
  greenButton.classList.add('highlight1');
  setTimeout(function(){
      greenButton.classList.remove('highlight1');
  }, 200);
}

function flashRed() {
  redButton.classList.add('highlight2');
  setTimeout(function(){
      redButton.classList.remove('highlight2');
  }, 200)
}

function flashYellow() {
  yellowButton.classList.add('highlight3');
  setTimeout(function(){
      yellowButton.classList.remove('highlight3');
  }, 200)
}

function flashBlue() {
  blueButton.classList.add('highlight4');
  setTimeout(function(){
      blueButton.classList.remove('highlight4');
  }, 200)
}