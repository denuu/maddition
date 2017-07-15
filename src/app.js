// BEGIN THE GAME
var score = 0;
var countdown = null;
if (localStorage.highScore) {
    document.getElementById('highscore').innerHTML = localStorage.highScore;
}

// GENERATE EQUATION
generateEquation();

/* F U N C T I O N S */

// Create a new equation
function generateEquation() {

    // Set new equation values
    var x = createRandomInt();
    var y = createRandomInt();
    var z = createAnswer(x, y); // maybe this should be calculated to be convincing if false

    document.getElementById('xInt').innerHTML = x;
    document.getElementById('yInt').innerHTML = y;
    document.getElementById('zInt').innerHTML = z;

}

// Get a random integer between 1 (inclusive) and 12 (inclusive)
function createRandomInt() {
    return Math.floor(Math.random() * 12) + 1;
}

// Generate correct answer, or incorrect answer that appears close to true
function createAnswer(x, y) {

    var lie = Math.floor(Math.random() * 2) + 1;
    var z = parseInt(x) + parseInt(y);

    if (lie == 2) {

        var offset = Math.floor(Math.random() * Math.min(x, y)) + 1;
        var charge = Math.random() < 0.5 ? -1 : 1;
        offset = charge * offset;
        z = z + offset;

    }

    return z;

}

// Determine if given answer matches correct answer
function matchAnswer(clicked) {

    var x = document.getElementById('xInt').innerHTML;
    var y = document.getElementById('yInt').innerHTML;
    var z = document.getElementById('zInt').innerHTML;
    var answer = parseInt(x) + parseInt(y);

    if ((answer == z && clicked == 'yes') || (answer != z && clicked == 'no')) {

        // User answer is correct
        console.log('correct!');
        score++;
        generateEquation();
        clearInterval(countdown);
        startTimer(125);

    } else {

        // User answer incorrect, record score
        console.log('incorrect');
        gameOver();

    }
}

function gameOver() {

    console.log('GAME OVER');
    console.log('score: '+score);
    clearInterval(countdown);
    if (localStorage.highScore) {
        if (localStorage.highScore < score) {
            localStorage.highScore = score;
        }
    } else {
        localStorage.highScore = score;
    }
    document.getElementById('highscore').innerHTML = localStorage.highScore;
    score = 0;

}

function startTimer(timer) {

    var initTime = timer;
    var bar = document.getElementById('loader');
    countdown = setInterval(function() {
        if (timer <= 0) {
            gameOver();
            return;
        } else {
            timer --;
            bar.style.width = ((timer / initTime) * 100) + '%';
        }
    }, 10);

}
