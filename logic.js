// Quiz Questions
var questions = [
    {
    prompt: "How do call a function named myFunction?",
    options: ["call myFunction()",  "myFunction()", "call function myFunction", "Call.myFunction"],
    answer: "myFunction()",
    },

    {
    prompt: "How do call a function named myFunction?",
    options: ["call myFunction()",  "myFunction()", "call function myFunction", "Call.myFunction"],
    answer: "myFunction()",
    },

    {
    prompt: "How do call a function named myFunction?",
    options: ["call myFunction()",  "myFunction()", "call function myFunction", "Call.myFunction"],
    answer: "myFunction()",
    },

    {
    prompt: "How do call a function named myFunction?",
    options: ["call myFunction()",  "myFunction()", "call function myFunction", "Call.myFunction"],
    answer: "myFunction()",
    }];

    // Quiz's initial state 
let currentQuestionIndex = 0; 
let time = questions.length * 15; 
let timerId;

// Created Dom Elements
let questionsEl = document.querySelector("#questions");
let timerEl = document.querySelector("#timer");
let choicesEl = document.querySelector("#options");
let submitBtn = document.querySelector("#submit");
let startBtn = document.querySelector("#start");
let initialsEl = document.querySelector("#initials");
let feedbackEl = document.querySelector("#feedback");
let clearEl = document.querySelector("#clear"); //this could be wrong not sure

// still needs finishing
function quizStart() {
    timerId = setInterval(clockTick, 1000);
    timerEl.textContent = time;
    let startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    getQuestion();
}

function getQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let promptEl = document.getElementById("question-title")
    promptEl.textContent = currentQuestion.prompt;
    choicesEl.innerHTML = "";
    currentQuestion.options.forEach(function (choice, i) {
            let choiceBtn = document.createElement("button");
            choiceBtn.setAttribute("value", choice);
            choiceBtn.textContent = i + 1 + ". " + choice;
            choiceBtn.onclick = questionClick;
            choicesEl.appendChild(choiceBtn);
        });
}

function questionClick() {
    if (this.value !== questions[currentQuestionIndex].answer) {
        time -= 10;
        if (time < 0) {
            time = 0;
        }
        timerEl.textContent = time; 
        feedbackEl.textContent = `wrong! The correct answer was ${questions[currentQuestionIndex].answer}.`;
        feedbackEl.style.color = "red";
        } else {
            feedbackEl.textContent = 
            "Correct!";
            feedbackEl.style.color = "green";
        }
        feedbackEl.setAttribute("class", "feedback");
        setTimeout( function() {
            feedbackEl.setAttribute( "class", "feedback-hide");
        }, 2000);
        currentQuestionIndex++;
        if (
        currentQuestionIndex === questions.length
        ) {
            quizEnd();
        } else {
            getQuestion();
        }
        }


//Quiz Questions
function quizEnd() {
    clearInterval(timerId);
    var endScreenEl = document.getElementById("quiz-end");
    endScreenEl.removeAttribute("class");
    var finalScoreEl = document.getElementById("score-final");
    finalScoreEl.textContent = time;
    questionsEl.setAttribute("class", "hide");
}

// clock timer function ends game
function clockTick() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
      quizEnd();
    }
}

// starts quiz
startBtn.onclick = quizStart;


