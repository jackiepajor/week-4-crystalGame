//Declare variables
var userTotalScore = 0;
var wins = 0;
var losses = 0;
var min = 19;
var max = 120;

//Pick a random number between 19(min) and 120(max) and display it to the user
$(document).ready(function () {
 var random = Math.floor(Math.random() * (max - min + 1)) + min;
  $('#matchThisScore').text(random);

  //Pick a random number between 1 and 12 for each of the 4 crystals
  var crystal1 = Math.floor(Math.random() * 11 + 1)
  var crystal2 = Math.floor(Math.random() * 11 + 1)
  var crystal3 = Math.floor(Math.random() * 11 + 1)
  var crystal4 = Math.floor(Math.random() * 11 + 1)

  //Display wins, increment by 1 point per win, and then reset the game
  function winner() {
    alert("Congrats, you win! Click OK to play again!");
    wins++;
    $('#wins').text(wins);
    reset();
  }
  //Display losses, increment by 1 point per loss, and then reset the game
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
    console.log("new userTotalScore= " + userTotalScore);
    $('#totalScore').text(userTotalScore);

    if (userTotalScore == random) {
      winner();
    } else if (userTotalScore > random) {
      loser();
    }
  })
    //Rainbow Crystal
  $('.rainbow').on('click', function () {
    userTotalScore = userTotalScore + crystal2;
    console.log("new userTotalScore= " + userTotalScore);
    $('#totalScore').text(userTotalScore);

    if (userTotalScore == random) {
      winner();
    } else if (userTotalScore > random) {
      loser();
    }
  })
    //Purple Crystal
  $('.purple').on('click', function () {
    userTotalScore = userTotalScore + crystal3;
    console.log("new userTotalScore= " + userTotalScore);
    $('#totalScore').text(userTotalScore);

    if (userTotalScore == random) {
      winner();
    } else if (userTotalScore > random) {
      loser();
    }
  })
    //Pink Crystal
  $('.pink').on('click', function () {
    userTotalScore = userTotalScore + crystal4;
    console.log("new userTotalScore= " + userTotalScore);
    $('#totalScore').text(userTotalScore);

    if (userTotalScore == random) {
      winner();
    } else if (userTotalScore > random) {
      loser();
    }
  });
});

//Reset the game - Generate a new number for user to match and reassign crystal values
function reset() {
  random = Math.floor(Math.random() * 120 + 19);
  console.log(Random)
  $('#matchThisScore').text(random);
  crystal1 = Math.floor(Math.random() * 11 + 1);
  crystal2 = Math.floor(Math.random() * 11 + 1);
  crystal3 = Math.floor(Math.random() * 11 + 1);
  crystal4 = Math.floor(Math.random() * 11 + 1);
  userTotalScore = 0;
  $('#totalScore').text(userTotalScore);
}