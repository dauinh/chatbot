function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatLog = document.getElementById("chat-log");
    if (chatLog) {
        // Display user message in the chat log
        var userMessageElement = document.createElement("div");
        userMessageElement.classList.add("chat-message");
        userMessageElement.innerHTML = "<strong>You:</strong> ".concat(userInput);
        chatLog.appendChild(userMessageElement);
        // Process the user's message (you can replace this with your chatbot logic)
        var botResponse = "This is the chatbot's response.";
        // Display chatbot response in the chat log
        var botMessageElement = document.createElement("div");
        botMessageElement.classList.add("chat-message");
        botMessageElement.innerHTML = "<strong>Chatbot:</strong> ".concat(botResponse);
        chatLog.appendChild(botMessageElement);
    }
    // Clear the user input field
    var userInputField = document.getElementById("user-input");
    if (userInputField) {
        userInputField.value = "";
    }
}
