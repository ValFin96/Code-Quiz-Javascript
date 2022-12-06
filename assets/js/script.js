var titleDiv = document.querySelector ("#title");
var ul = document.querySelector ("#list");
var startBtn = document.querySelector("#strtBtn");
var choices = document.querySelector(".choices");
var intro = document.querySelector("#intro");
var evaluation = document.querySelector("#evaluation");
var timeLeft = document.querySelector("#timer");

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
        timeLeft.extContent = "Time left: " + seconsLeft + " s";
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


// function startQuiz () {
//     // hide the main SpeechRecognitionResult
//     // start TimeRanges
//     // time text 
//     // getquestion   
//     //         li.onclcick = clickedQuestion
//     //    }
//     //    li.textContent = questions[i].choices;
//     //    choices.appendChild(ul);
//     //    ul.appendChild (li);
//     // }
//     // function clickedQuestion(){
//     //     // check if answerwer is right or qwrong
//     //     // udpate time if wrong
//     //     // check if you have run out of questions;
//     //     // increase questionindex
// }

function createQuestion(){
    intro.innerHTML = " ";
    
    startBtn.setAttribute('class', "strtBtn");
    titleDiv.textContent = questions[questionNumber].title;
    
    var lis = document.querySelectorAll(".options");
    
    lis.forEach(function(element, index){
        element.textContent = questions[questionNumber].choices[index];
        element.setAttribute("id", "options");
        
        element.addEventListener("click", function(event){
            var userChoice = event.target;
            
            if(questions[questionNumber].answer == userChoice.textContent) {
                evaluation.textContent = "Correct!"
                questionNumber++;
                createQuestion();
            } 
    });
});
}
// function clickedQuestion(){
    
//         if(questions[questionNumber].answer == index) {
//             questionNumber++;
//            console.log("Correct!");
//         } else {
//             console.log("Wrong!");
//         }
//     });
// }
// function init(){
//     createQuestion();
//     clickedQuestion();
// }
