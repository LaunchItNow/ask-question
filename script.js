// Function to save the question as a parameter in the URL
const saveQuestion = () => {
  var question = document.getElementById("messageInput").value.trim();
  if (question === "") {
    alert("Please enter a question.");
    return;
  }

  var url = new URL(window.location.href);
  url.searchParams.set("param", question);
  window.history.replaceState({}, "", url);

  // Remove the input field and display the question as an h1 element
  document.getElementById("question").innerHTML = "<h1>" + question + "</h1>";

  // Remove the save button
  document.getElementById("saveButton").style.display = "none";

  // Remove the instructions
  document.getElementById("instructions").style.display = "none";

  // Bring back the yes and no buttons
  document.getElementById("buttons").style.display = "block";
};

// Retrieve the question parameter from the URL
const getQuestionFromURL = () => {
  var urlParams = new URLSearchParams(window.location.search);
  var question = urlParams.get("param");
  if (question) {
    // Remove the input field and display the question as an h1 element
    document.getElementById("question").innerHTML = "<h1>" + question + "</h1>";

    // Remove the save button
    document.getElementById("saveButton").style.display = "none";

    // Bring back the yes and no buttons
    document.getElementById("buttons").style.display = "block";

    // Remove the instructions
    document.getElementById("instructions").style.display = "none";
  }
};

// Call the function to retrieve question from the URL when the page loads
getQuestionFromURL();

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

// Function to show heart emoji rain
const showHeartRain = () => {
  for (let i = 0; i < 10; i++) {
    createHeartEmoji();
  }
};

// Function to create a single heart emoji element
const createHeartEmoji = () => {
  var heartEmoji = document.createElement("div");
  heartEmoji.innerHTML = "❤️";
  heartEmoji.style.position = "absolute";
  heartEmoji.style.fontSize = "20px";
  heartEmoji.style.color = "red";

  var body = document.getElementsByTagName("body")[0];
  body.appendChild(heartEmoji);

  var x = Math.random() * window.innerWidth;
  var y = -20; // Start from top
  var speed = Math.random() * 2 + 1; // Random speed between 1 and 3

  var animation = setInterval(frame, 15);

  function frame() {
    if (y >= window.innerHeight) {
      clearInterval(animation);
      body.removeChild(heartEmoji);
    } else {
      y += speed;
      heartEmoji.style.top = y + "px";
      heartEmoji.style.left = x + "px";
    }
  }

  setTimeout(() => {
    clearInterval(animation);
    body.removeChild(heartEmoji);
  }, 5000); // Remove hearts after 5 seconds
};
