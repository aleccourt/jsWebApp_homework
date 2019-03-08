// Define weapons
var weapons = ['rock', 'paper', 'scissors'];

// Define players
var alecWins = 0;
var alec = "Alec";
var ivanWins = 0;
var ivan = "Ivan Drago";

var count = 0
// While loop
while (alecWins < 3 && ivanWins < 3){
  var alecHand = weapons[parseInt(Math.random()*weapons.length)%3];
  var ivanHand = weapons[parseInt(Math.random()*weapons.length)%3];
  var round = alecHand.concat(" ", ivanHand);
  console.log("Alec: " + alecHand);
  console.log("Ivan: " + ivanHand);
  count += 1;
  if (alecHand == ivanHand){
    console.log("Round " + count + " is a tie");
  }
  else {
    switch(round){
      //Rock and scissors outcomes
      case "rock scissors":
          alecWins += 1;
          console.log(alec + " wins round " + count)
          break;
      case "scissors rock":
          ivanWins += 1;
          console.log(ivan + " wins round " + count)
          break;
      // Scissors and paper outcomes
      case "scissors paper":
          alecWins += 1;
          console.log(alec + " wins round " + count)
          break;
      case "paper scissors":
          ivanWins += 1;
          console.log(ivan + " wins round " + count)
          break;
      // Paper and rock outcomes
      case "paper rock":
          alecWins += 1;
          console.log(alec + " wins round " + count)
          break;
      case "rock paper":
          ivanWins += 1;
          console.log(ivan + " wins round " + count)
          break;
    }
  }
}
// If statement to announce the winner
if (alecWins == 3){
  console.log("The winner is.... " + alec);
}
else {
  console.log("The winner is.... " + ivan);
}
