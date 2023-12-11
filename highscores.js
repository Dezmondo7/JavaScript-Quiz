function saveHighScores() {
    let name = nameEl.value.trim();
    if (name !== "") {
        let highscores  = JSON.parse(window.localStorage.getItem("highscores")) || [];
        let newScore = {
            score: time,
            name: name,
        };
            highscores.push(newScore);
            window.localStorage.getItem("highscores", JSON.stringify(highscores));
        }
    };

    function enterScores(event) {
        if (event.key === "Enter") {
            highscores();
        }
    }    
    nameEl.onkeyup = enterScores;

    submitBtn.onclick = highscores;
