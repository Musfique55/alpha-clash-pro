function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function randomAlphabet(){
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabets.split('');
    const index = Math.round(Math.random() * 25);
    const randomAlphabet = alphabet[index];
    return randomAlphabet;
}

function setBackGroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getElementIdByText(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}
const audio = new Audio();
let gameOn = false;
function detectKey(event){
    if(gameOn == false) return;
    const playerPressed = event.key;
    if(playerPressed === 'Escape'){
        hideElementById('playGround');
        hideElementById('home-screen');
        showElementById('score-board');
        
    }
    const alpha = document.getElementById('randomAlpha').innerText;
    const expectedResult = alpha.toLowerCase();
    if(playerPressed === expectedResult){
        audio.src = 'audio/success.mp3';
        audio.play();
        continueGame();
        removeBackgroundColor(expectedResult);
        const score = document.getElementById('score');
        const scoreValue = score.innerText;
        const number = parseInt(scoreValue);
        const updatedScore = number + 1;
        score.innerText = updatedScore;
        
    }else{
        audio.src = 'audio/wrong.mp3';
        audio.play();
        const life = document.getElementById('life');
        const lifeCount = life.innerText;
        const updateLife = lifeCount - 1;
        life.innerText = updateLife;
        if(updateLife === 0){
            gameOver();

        }
    }
}
document.addEventListener('keyup',detectKey);

function play(){
    gameOn = true;
    showElementById('playGround');
    // hide playground
    hideElementById('home-screen');
    // game loop
    continueGame();
    // hide scoreboard
    hideElementById('score-board');

    // reset  score
    const score = document.getElementById('score');
    score.innerText = 0;
    // reset life
    const life = document.getElementById('life');
    life.innerText = 5;

    }
    
// show playground
function continueGame(){
    const screen = document.getElementById('randomAlpha');
    const randomAlpha = randomAlphabet();
    screen.innerText = randomAlpha;
    setBackGroundColor(randomAlpha);
}

function gameOver(){
    gameOn = false;
    hideElementById('playGround');
    showElementById('score-board');
    const finalScore = document.getElementById('final-score');
    const prevScore = document.getElementById('score').innerText;
    finalScore.innerText = prevScore;
    const removeBg = getElementIdByText('randomAlpha');
    removeBackgroundColor(removeBg);
}