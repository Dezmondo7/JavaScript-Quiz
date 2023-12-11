var scoreBtn = document.querySelector("#scores");

function printScores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    highscores.sort(function (a, b) {
        return b.score - a.score;
});
    highscores.forEach(function(score) {
    var listTag = document.createElement("li");
    listTag.textContent = score.name + " - " + score.score;
    var olEl = document.getElementById("highscores");
    olEl.appendChild(listTag);
   });
}

function clearScores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}   document.getElementById("clear").onclick = clearScores;

printScores();
