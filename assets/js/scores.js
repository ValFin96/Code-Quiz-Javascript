var goBack = document.querySelector("#backBtn")
var clearScore = document.querySelector ("#clearBtn")


goBack.addEventListener("click", function (){
    window.location.href = "http://127.0.0.1:5500/index.html";
});
clearScore.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
})