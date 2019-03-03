var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice(){
  const choices = ['r','p','s'];
  const randNum = Math.floor(Math.random()*3);
  return choices[randNum];
}

function convertToWord(letter){
  if (letter === "r") return "Rock";
  if(letter === "p") return "Paper";
  return "Scissors"
}

function win(userChoice, compChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = "You choice " + convertToWord(userChoice) + " beats "+ convertToWord(compChoice)
  + ". You win!";
}

function lose(userChoice, compChoice){
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = "You choice " + convertToWord(userChoice) + " looses "+ convertToWord(compChoice)
  + ". You lose.";
}

function draw(userChoice, compChoice){
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = "You choice " + convertToWord(userChoice) + " ties "+ convertToWord(compChoice)
  + ".";
}


function game(userChoice){
  const compChoice = getCompChoice();
  switch (userChoice + compChoice){
    case "rs":
    case "pr":
    case "sp":
    //user win
      win(userChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
    //user lose
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
    //tie
      draw(userChoice, compChoice);
      break;
  }
}

function main(){
  rock_div.addEventListener('click', function(){
    game("r");
  })

  paper_div.addEventListener('click', function(){
    game("p");
  })

  scissors_div.addEventListener('click', function(){
    game("s");
  })
}
main();
