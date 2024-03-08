function moveNoButtonAway() {
  var noButton = document.getElementById("noButton");
  noButton.classList.add("moveAway");

  // Disable button to prevent multiple clicks
  noButton.disabled = true;
}
