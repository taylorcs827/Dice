document.getElementById("rollBtn").addEventListener("click", function() {
  // Generate random numbers
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Set image sources
  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  // Determine winner
  let resultText;
  if (randomNumber1 > randomNumber2) {
    resultText = "Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    resultText = "Player 2 Wins!";
  } else {
    resultText = "Draw!";
  }

  // Update result text
  document.querySelector("h1").innerHTML = resultText;
});
