const playBtn = document.getElementById("play-btn");
playBtn.addEventListener("click", play);

function play(){
const homeScreen = document.getElementById("home-screen");
const playGround = document.getElementById("playGround");
const screen = document.getElementById('randomAlpha');

playGround.classList.remove("hidden");
homeScreen.classList.add("hidden");

const alphabets = 'abcdefghijklmnopqrstuvwxyz';
const alphabet = alphabets.split('');
const randomNumber = Math.round(Math.random() * 25);
const generateAlphabet = alphabet[randomNumber];
screen.innerText = generateAlphabet;

// set background color
    setBackGroundColor(generateAlphabet);
}

function setBackGroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}