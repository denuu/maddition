if (document.readyState === 'complete') {

    console.log('testing');

    // GENERATE EQUATION
        var start = 2000;
        var remaining = 2000;
        generateEquation();

        // SCORE++

        // CLICK ANSWER

        // GET CLICKED ANSWER VALUE
        var clicked = document.getElementByClassName('btn-game').value;

        // CHECK ANSWER
            // IF CORRECT NEW EQUATION, START AGAIN
            // ELSEIF WRONG RECORD SCORE, GAME OVER
        matchAnswer(clicked);

        // DECREASE TIMER
        setInterval(updateTimer(), 10);

    // GAME OVER




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
        var answer = intval(x) + intval(y);

        if ((answer == z && clicked == 'yes') || (answer != z && clicked == 'no')) {
            newLevel();
        } else {
            gameOver();
        }
    }

    // Decrease remaining timer and the width of the timer bar
    function decreaseTimer(start, remaining) {
        var bar = document.getElementById('loader');

        if (remaining <= 0) {
            // timer has run out - game over
            gameOver();
            clearInterval(timer);
        } else {
            // decrease timer
            remaining - 10;
            bar.style.width = ((remaining / start) * 100) + '%';
            console.log(remaining);
        }
    }
    
}
