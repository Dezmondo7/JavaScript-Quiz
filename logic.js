// Quiz's initial state 
let QuestionIndex = 0; 
let time = questions.length * 15; 
let clockTimer = 0;
let clockTick = 0;

// Created Dom Elements
let questionsEl = document.querySelector("#questions");
let timerEL = document.querySelector("#timer");
let choicesEl = document.querySelector("#choices");
let submitBtnEl = document.querySelector("#submit");
let startBtnEl = document.querySelector("#start");
let initialsEl = document.querySelector("#initials");
let feedbackEL = document.querySelector("#feedback");
let clearEl = document.querySelector("#clear"); //this could be wrong not sure

// starts Quiz
startBtn.addEventListener("click", quizStart());

// still needs finishing
function quizStart() {
    clockTimer = setInterval(
    clockTick, 
    1000,
    );
    timerEL.textContent = time;
    let startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute(
        "class",
        "hide"
    );
    questionsEl.removeAttribute(
        "class"
    );
    getQuestion();
}

function getQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let promptEl = document.getElementById(
    "question-title"
    );
    promptEl.textContent = currentQuestion.prompt;
    choicesEl.innerHTML = '';
    currentQuestion.options.forEach(
        function (choice, i ) {
            let choiceBtn = document.createElement(
                "button"
            );
            choiceBtn.setAttribute(
                "value",
                choice
            );
            choiceBtn.textContent = i + 1 + ". " + choice;
            choiceBtn.onclick = questionClick;
            choicesEl.appendChild(
                choiceBtn
            )
        }
    )
}

function questionClick {
    if (
        this.value !==
        question[currentQuestionIndex]
        .answer
    ) {
        time -10;
        if (time < 0) {
            time = 0;
        }
        timerEL.textContent = time; 
        feedbackEL.textContent = `wrong! The correct answer was ${questions[currentQuestionIndex].answer}.`;
        feedbackEL.style.color = "red";
        } else {
            feedbackEL.textContent = 
            "Correct!";
        }
}

//Quiz Questions
var questions = [
    {
questions: 'How do call a function named myFunction?',
options: [
    "call myFunction()",
    "myFunction()",
    "call function myFunction",
    "Call.myFunction",
],
answer: "myFunction()",
    }
]

// clock timer function ends game
function clockTick() { 
    time--; 
    timerEl.textContent = time; 
    if (time <= 0) { 
        quizEnd(); 
    } 
} 



