var titleDiv = document.querySelector ("#title");
var ul = document.querySelector ("#list");
var startBtn = document.querySelector("#strtBtn");
var choices = document.querySelector(".choices");
var intro = document.querySelector("#intro");
var evaluation = document.querySelector("#evaluation");
var timeLeft = document.querySelector("#timer");
var questionContainer = document.querySelector(".container");

var score = 0;
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];
var questionNumber = 0
var secondsLeft = 76;
var penaltySeconds = 10;

function countdown(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeLeft.textContent = "Time left: " + secondsLeft + " s";
        if (secondsLeft <=0){
            clearInterval(timerInterval);
            timeLeft.textContent = "Time's up!";
            gameOver(); // not defined
        } else if(questionNumber >= questions.length + 1){
            clearInterval(timerInterval);
            gameOver() //not defined
        }
    }, 1000)
}

function startQuiz(){
    countdown();
    createQuestion();
}
startBtn.addEventListener("click", startQuiz)

function createQuestion(){
    intro.innerHTML = " ";
    
    startBtn.setAttribute('class', "strtBtn");
    titleDiv.textContent = questions[questionNumber].title;
    
    var lis = document.querySelectorAll(".options");
    
    lis.forEach(function(element, index){
        element.textContent = questions[questionNumber].choices[index];
        element.setAttribute("id", "options");
        clickedQuestion(element);
});


}
function clickedQuestion (element, index){
    if (questionNumber == 0) {
    element.addEventListener("click", function(event){
        var userChoice = event.target;
    if(questions[questionNumber].answer == userChoice.textContent) {
            score++;
            evaluation.textContent = "Correct!"
            
    } else{
            secondsLeft = secondsLeft - penaltySeconds;
            evaluation.textContent = "Wrong!";
    };
        questionNumber++;
        if (questionNumber >= questions.length){
            gameOver();
        } else {
        titleDiv.textContent = questions[questionNumber].title;
        var lis = document.querySelectorAll(".options");
        lis.forEach(function(element, index){
            element.textContent = questions[questionNumber].choices[index];
            element.setAttribute("id", "options");
            clickedQuestion(element);
            });
        };
        });
    };
}
function gameOver(){
    questionContainer.innerHTML = "";
    timeLeft.style.display = "none";
    if (secondsLeft >= 0){
        var finalScore = secondsLeft;
    var newP = document.createElement("p");
    newP.setAttribute ("class", "final-score");
    newP.textContent = "All done! Your final score is: " + finalScore;
    questionContainer.appendChild(newP);
    }

    var enterInitials = document.createElement("label");
    enterInitials.setAttribute("class", "initials");
    enterInitials.textContent = "Enter your initials: ";
    questionContainer.appendChild(enterInitials);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class","initials-field");
    input.textContent = "";
    questionContainer.appendChild(input);

    var submitBtn = document.createElement("button");
    submitBtn.setAttribute("type","submit");
    submitBtn.setAttribute("class", "submit-button");
    submitBtn.textContent = "Submit";
    questionContainer.appendChild(submitBtn);

    
    submitBtn.addEventListener("click", function(){
    var initials = input.value;
    if (initials === null) {
        alert("Please enter your initials")
    } else {
        var finalResult = {
            initials: initials,
            score: finalScore,
        }
        console.log(finalResult);
        var allScores = JSON.parse(localStorage.getItem("allScores")) || [];
        // if (allScores === null){
        //     allScores = [];
        // } else{
        //     allScores = JSON.parse(allScores);
        // }
        allScores.push(finalResult);
        // var newResult = JSON.stringify(allScores);
        // console.log(newResult);
        localStorage.setItem("allScores","newResult");
        window.location.href = "scores.html"
    }
    });
}



