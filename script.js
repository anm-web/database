document.getElementById("Form").addEventListener("submit", function (event) {
  event.preventDefault();

  var pass = document.getElementById("pass").value.toLowerCase().trim();

  if (pass === "webdev") {
    window.location.href = "main.html";
  } else {
    displayMessage("Incorrect Password. Please try again.");
  }
});

function displayMessage(message) {
  var messageElement = document.getElementById("message");
  if (!messageElement) {
    messageElement = document.createElement("p");
    messageElement.id = "message";
    document.getElementById("Form").appendChild(messageElement);
  }
  messageElement.innerHTML = message;
}
