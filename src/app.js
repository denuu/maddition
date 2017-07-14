// GENERATE EQUATION
var score = 0;
if (localStorage.highScore) {
    document.getElementById('highscore').innerHTML = localStorage.highScore;
}
generateEquation();

// SCORE++

// CLICK ANSWER

// GET CLICKED ANSWER VALUE
var clicked = document.getElementsByClassName('btn-game')[0].value;

// CHECK ANSWER
    // IF CORRECT NEW EQUATION, START AGAIN
    // ELSEIF WRONG RECORD SCORE, GAME OVER
matchAnswer(clicked);

// DECREASE TIMER
startTimer(200);
// setInterval(updateTimer(start, remaining), 10);

// GAME OVER



/* F U N C T I O N S */

// Create a new equation
function generateEquation() {

    // Set new equation values
    var x = getRandomInt();
    var y = getRandomInt();
    var z = getRandomInt(); // maybe this should be calculated to be convincing if false

    document.getElementById('xInt').innerHTML = x;
    document.getElementById('yInt').innerHTML = y;
    document.getElementById('zInt').innerHTML = z;

}

// Get a random integer between 1 (inclusive) and 12 (inclusive)
function getRandomInt() {
    var min = 1;
    var max = 12;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Determine if given answer matches correct answer
function matchAnswer(clicked) {
    var x = document.getElementById('xInt');
    var y = document.getElementById('yInt');
    var z = document.getElementById('answer');
    var answer = parseInt(x) + parseInt(y);

    if ((answer == z && clicked == 'yes') || (answer != z && clicked == 'no')) {
        // User answer is correct
        score++;
        newLevel();
    } else {
        // User answer incorrect, record score
        if (localStorage.highScore) {
            if (localStorage.highScore < score) {
                localStorage.highScore = score;
            }
        }
        gameOver();
    }
}

function gameOver() {

    return true;
}

function startTimer(timer) {
    var initTime = timer;
    var bar = document.getElementById('loader');
    setInterval(function() {
        if (timer <= 0) {
            clearInterval(startTimer);
            gameOver();
            return;
        } else {
            timer --;
            bar.style.width = ((timer / initTime) * 100) + '%';
        }
    }, 10); //10 will  run it every 100th of a second
}
