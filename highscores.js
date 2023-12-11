function savedHighScores() {
    let name = nameEl.value.trim();
    if (name !== "") {
        let savedScores = JSON.parse(window.localStorage.getItem("final-score")) || [];
        let newScore = {
            score: time,
            name: name,
        };
            savedScores.push(newScore);
            window.localStorage.getItem("final-score", JSON.stringify(savedScores));
        }
    }

    function enterScores(event) {
        if (event.key === "Enter") {
            savedScores();
        }
    }    
    nameEl.onkeyup = enterScores;

    submitBtn.onclick = savedScores;
