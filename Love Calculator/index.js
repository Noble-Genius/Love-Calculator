


document.querySelector("#calc-button").addEventListener("click", function (){
  var userName = document.querySelector("#User").value;
  var crushName = document.querySelector("#Crush").value;
  var randomNum = Math.floor(Math.random()*100 + 1);
  if(randomNum > 90 && randomNum < 100 ) {
    document.querySelector("#result").textContent = "Congratulations!" + userName + ". You Love with " + crushName + " is rated " + randomNum + "%";
  }else {
    document.querySelector("#result").textContent = "Your Love score is " + randomNum + "%";
  }
})
