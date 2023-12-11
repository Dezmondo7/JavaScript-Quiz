// Quiz Questions
var questions = [
    {
    prompt: "How do you call a function named myFunction?",
    options: ["call myFunction()",  "myFunction()", "call function myFunction", "Call.myFunction"],
    answer: "myFunction()",
    },

    {
    prompt: "Which of the below wraps around HTML elements?",
    options: ["{}",  "[]", "<>", "()"],
    answer: "<>",
    },

    {
    prompt: "Which of these is only used as a back-end language?",
    options: ["JavaScript",  "HTML", "CSS", "SQL"],
    answer: "SQL",
    },

    {
    prompt: "What technology is used to host data in the cloud?",
    options: ["AWS",  "Hyper-V", "VMWare", "Java"],
    answer: "AWS",
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
let nameEl = document.querySelector("#name");

// Starts the quiz
function quizStart() {
    timerId = setInterval(clockTick, 1000);
    timerEl.textContent = time;
    let startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    getQuestion();
}

//Gets the next question
function getQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let promptEl = document.getElementById("question-title");
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

//Checks for the right/wrong answer
function questionClick() {
    if (this.value !== questions[currentQuestionIndex].answer) {
        time -= 10;
        if (time < 0) {
            time = 0;
        }
        timerEl.textContent = time; 
        feedbackEl.textContent = `Wrong! The correct answer was ${questions[currentQuestionIndex].answer}.`;
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


//Quiz Ends
function quizEnd() {
    clearInterval(timerId);
    let endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");
    let finalScoreEl = document.getElementById("final-score");
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



startBtn.onclick = quizStart;

/*Checks for scores entered    
function EnterScores(event) {
    if (event.key === "Enter") {
        savedScores();
    }
}    
nameEl.onkeyup = EnterScores;*/

startBtn.onclick = quizStart; 




