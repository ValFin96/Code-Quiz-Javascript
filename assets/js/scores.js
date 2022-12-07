var goBack = document.querySelector("#backBtn");
var clearScore = document.querySelector ("#clearBtn");
var scoreRecord = document.querySelector("#scoreRecord");

// Attach an even listener to go back to teh start of the quiz
goBack.addEventListener("click", function (){
    window.location.href = "index.html";
});

//Button to clear score and reload page
clearScore.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
})
let allScores = JSON.parse(localStorage.getItem("allScores")) || [];

// Looping over array of scores to display all the saved scores on a scoreboard
for (var i = 0; i < allScores.length; i++){
    console.log(allScores[i])
    var li= document.createElement("li");
    li.textContent = allScores[i].initials + " " + allScores[i].score;
    scoreRecord.appendChild(li);
    li.setAttribute("class","lines");
};



