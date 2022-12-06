var goBack = document.querySelector("#backBtn");
var clearScore = document.querySelector ("#clearBtn");
var scoreRecord = document.querySelector("#scoreRecord");

goBack.addEventListener("click", function (){
    window.location.href = "http://127.0.0.1:5500/index.html";
});
clearScore.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
})

var allScores = localStorage.getItem("allScores");
allscores = JSON.parse(allScores);

if (allScores !== null){
    for (var i=0; i<allScores.length; i++){
        var li= document.createAttribute("li");
        li.textContent = allScores[i].initials + " " + allScores[i].score;
        scoreRecord.appendChild(li);
    }
}