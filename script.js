// Function to save the message as a parameter in the URL
function saveMessage() {
  var message = document.getElementById("messageInput").value;
  if (message.trim() === "") {
    alert("Please enter a message.");
    return;
  }

  var url = new URL(window.location.href);
  url.searchParams.set("param", message);
  window.history.replaceState({}, "", url);

  // Show the buttons after saving the message
  document.getElementById("buttons").style.display = "block";
}

// Retrieve the message parameter from the URL
function getMessageFromURL() {
  var urlParams = new URLSearchParams(window.location.search);
  var message = urlParams.get("param");
  if (message) {
    document.getElementById("messageInput").value = message;
    document.getElementById("buttons").style.display = "block";
  }
}

// Call the function to retrieve message from the URL when the page loads
getMessageFromURL();

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
