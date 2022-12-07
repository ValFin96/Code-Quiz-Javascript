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
// Declare variables for question index and timer variables
var questionNumber = 0
var secondsLeft = 76;
var penaltySeconds = 10;

// Function that calls all other functions in it
function startQuiz(){
    countdown();
    createQuestion();
};

// Attach the main function to teh button
startBtn.addEventListener("click", startQuiz)

// Set the countdown 
function countdown(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeLeft.textContent = "Time left: " + secondsLeft + " s";
        if (secondsLeft <=0){
            clearInterval(timerInterval);
            timeLeft.textContent = "Time's up!";
            gameOver(); 
        } else if(questionNumber >= questions.length + 1){
            clearInterval(timerInterval);
            gameOver() 
        }
    }, 1000)
}

// This function displays a question for the user and multiple optios via a for loop
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

// Function that determines what happens after a user clciked on a question
function clickedQuestion (element, index){
    if (questionNumber == 0) {
    element.addEventListener("click", function(event){
        var userChoice = event.target;
    if(questions[questionNumber].answer == userChoice.textContent) {
            score++;
            evaluation.textContent = "Correct!"
            evaluation.style.display = "block";
            
    } else{
            secondsLeft = secondsLeft - penaltySeconds;
            evaluation.textContent = "Wrong!";
            evaluation.style.display = "block";
    };
        questionNumber++;
        
        console.log(questionNumber);
        console.log(questionNumber-1);
       
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

//Once the user reaches the end, display the score and store the result
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

// Attach an even listener to submit button next to initials input. Store the result in a local storage
    submitBtn.addEventListener("click", function(){
    var initials = input.value;
    if (!initials) {
        alert("Please enter your initials")
    } else {
        var finalResult = {
            initials: initials,
            score: finalScore,
        };
        var allScores = JSON.parse(window.localStorage.getItem("allScores")) || [];
        allScores.push(finalResult);
        localStorage.setItem("allScores",JSON.stringify(allScores));
        // move on to the next page to see a scoreboard
        window.location.href = "scores.html" 
    }
    });
}