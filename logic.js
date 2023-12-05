
// Quiz's initial state 
let QuestionIndex = 0; 
let time = questions.length * 15; 
let clockTimer; 

// Created Dom Elements
let questionsEl = document.querySelector("#questions");
let timerEL = document.querySelector("#timer");
let choicesEl = document.querySelector("#choices");
let submitEl = document.querySelector("#submit");
let startEl = document.querySelector("#start");
let initialsEl = document.querySelector("#initials");
let feedbackEL = document.querySelector("#feedback");
let clearEl = document.querySelector("#clear"); //this could be wrong not sure

// starts Quiz
startBtn.onclick = quizStart;

// still needs finishing
function quizStart() {
    clockTimer = setInterval(
    clockTick, 
    1000,
    )
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
    let questions = questions[QuestionIndex];
    let promptEl = document.getElementById(
    "#question-title"
    );
    promptEl.textContent = Question.prompt;
    choicesEl.innerHTML = '';
    questions.options.forEach(
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

// Get Dom Elements



