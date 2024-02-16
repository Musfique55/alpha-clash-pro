function play(){
    // show playground
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