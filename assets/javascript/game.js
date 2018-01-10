//Declare variables
var userTotalScore = 0;
var wins = 0;
var losses = 0;

//Pick a random number between 19 and 120 and display it to the user
$(document).ready(function () {
  var Random = Math.floor(Math.random() * 120 + 19)
  $('#matchThisScore').text(Random);

  //Pick a random number between 1 and 12 for each of the 4 crystals
  var crystal1 = Math.floor(Math.random() * 12 + 1)
  var num2 = Math.floor(Math.random() * 12 + 1)
  var num3 = Math.floor(Math.random() * 12 + 1)
  var num4 = Math.floor(Math.random() * 12 + 1)

  //Alert and display wins
  function winner() {
    alert("Congrats, you win! Click OK to play again!");
    wins++;
    $('#wins').text(wins);
    reset();
  }
  //Alert and display losses
  function loser() {
    alert("Sorry, you lost! Click OK to play again!");
    losses++;
    $('#losses').text(losses);
    reset()
  }

  $('#wins').text(wins);
  $('#losses').text(losses);


  //When user clicks on a crystal, add the crystal number to their score
  //If the users score matches the random number, they win, otherwise they lose
   //Clear Crystal
  $('.clear').on('click', function () {
    userTotalScore = userTotalScore + crystal1;
    console.log("New userTotalScore= " + userTotalScore);
    $('#totalScore').text(userTotalScore);

    if (userTotalScore == Random) {
      winner();
    } else if (userTotalScore > Random) {
      loser();
    }
  })
    //Rainbow Crystal
  $('.rainbow').on('click', function () {
    userTotalScore = userTotalScore + num2;
    console.log("New userTotalScore= " + userTotalScore);
    $('#totalScore').text(userTotalScore);

    if (userTotalScore == Random) {
      winner();
    } else if (userTotalScore > Random) {
      loser();
    }
  })
    //Purple Crystal
  $('.purple').on('click', function () {
    userTotalScore = userTotalScore + num3;
    console.log("New userTotalScore= " + userTotalScore);
    $('#totalScore').text(userTotalScore);

    if (userTotalScore == Random) {
      winner();
    } else if (userTotalScore > Random) {
      loser();
    }
  })
    //Pink Crystal
  $('.pink').on('click', function () {
    userTotalScore = userTotalScore + num4;
    console.log("New userTotalScore= " + userTotalScore);
    $('#totalScore').text(userTotalScore);

    if (userTotalScore == Random) {
      winner();
    } else if (userTotalScore > Random) {
      loser();
    }
  });
});

//Reset the game - Generate a new number for user to match, reassign crystal values, and clear the scoreboard
function reset() {
  Random = Math.floor(Math.random() * 120 + 19);
  console.log(Random)
  $('#matchThisScore').text(Random);
  crystal1 = Math.floor(Math.random() * 12 + 1);
  num2 = Math.floor(Math.random() * 12 + 1);
  num3 = Math.floor(Math.random() * 12 + 1);
  num4 = Math.floor(Math.random() * 12 + 1);
  userTotalScore = 0;
  $('#totalScore').text(userTotalScore);
}