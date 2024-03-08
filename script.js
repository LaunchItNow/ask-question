// Function to handle hovering over the "No" button
const handleNoButtonHover = () => {
  var noButton = document.getElementById("noButton");
  var newPositionX =
    Math.random() * (window.innerWidth - 100 - noButton.offsetWidth);
  var newPositionY =
    Math.random() * (window.innerHeight - 100 - noButton.offsetHeight);

  noButton.style.position = "absolute";
  noButton.style.left = newPositionX + "px";
  noButton.style.top = newPositionY + "px";
};

// Function to move the "No" button away
const moveNoButtonAway = () => {
  var noButton = document.getElementById("noButton");
  noButton.classList.add("moveAway");

  // Disable button to prevent multiple clicks
  noButton.disabled = true;
};

// Event listener to handle hover over the "No" button
document
  .getElementById("noButton")
  .addEventListener("mouseenter", handleNoButtonHover);
