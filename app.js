function myFunction() {
  
  var userChoice = prompt("Type in rock, paper or scissor?");  
    if (! userChoice) {
      document.write("<p>Invalid! Refresh screen to try again.</p>");
    } else {
      document.write("<p>Player:" + " " + userChoice + "</p>");
    }

  var computerChoices = ["rock", "paper", "scissor"];
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  document.write("<p>Computer:" + " " + computerGuess + "</p>");

  var compare = function(choice1,choice2) {
    if (choice1 === choice2) {
      return "It's a tie!";
      }

    if (choice1 === "rock") {
      if (choice2 === "scissor") {
        return "Player wins!";
      } 
      else {
        return "Computer wins! Try again.";
      }
    }

    if (choice1 === "paper") {
      if (choice2 === "rock") {
        return "Player wins!";
      } 
      else {
        return "Computer wins! Try again.";
      }
    }

    if (choice1 === "scissor") {
      if (choice2 === "rock") {
        return "Player lose! Try again.";
      } 
      else {
        return "Computer win!";
      }
    }
  };

var results = compare(userChoice,computerGuess);
  document.write("<br><hr><br>" + results);
}
