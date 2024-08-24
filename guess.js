const randomnumber = parseInt((Math.random()*100) +1);
const submit = document.querySelector('#subt');
const user = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(user.value);
    validateGuess(guess);
    })
}

function validateGuess(guess) {
// guess value check btw 1 to 100 or other check
if(isNaN(guess)){
    alert(`Please enter a valid guess`)
}
else if(guess<1){
    alert(`please enter a num more then one`);
}
else if(guess > 100){
    alert(`please enter a num less then 100`);
}
else{
    prevGuess.push(guess);
    if(numGuess === 11){
        displayGuess(guess);
        displayMessage(`Game is ove and the random number is ${randomnumber}`);
        endGame();
    }
    else{
        displayGuess(guess);
        checkGuess(guess);
    }
}
}
function checkGuess(guess) {
if(guess === randomnumber){
    displayMessage(`Congrats you guessed the number in  guesses`);
    endGame();
}
else if(guess < randomnumber){
    displayMessage(`guess is too low`);
}
else if(guess > randomnumber){
    displayMessage(`guess is too high`);
}
}
function displayMessage(message){
lowOrHigh.innerHTML = `${message}`
}
function displayGuess(guess){
user.value ='';
guessSlot.innerHTML =`${guess}  , `;
numGuess++;
remaining.innerHTML =`${11 - numGuess}`;
}
function newGame(){
 const newGameButton = document.querySelector('#newGame');
 newGameButton.addEventListener('click',function(e){
    randomnumber= parseInt(Math.random() * 100 +1);
    prevGuess = [];
     numGuess = 1;
     guessSlot.innerHTML = ''
     remaining.innerHTML = `${11 - numGuess}`;
     user.removeAttribute('disabled')
     startOver.removeChild(p);
     playGame = true;
    
 })
}
function endGame(){
user.value ='';
user.setAttribute('disabled','');
p.classList.add('button');
p.innerHTML = `<h2 id="newGame"> Start new Game</h2>`;
startOver.appendChild(p);
playGame = false;
newGame();
}