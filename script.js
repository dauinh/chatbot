function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatLog = document.getElementById("chat-log");

    // Create message containers
    var userMessageContainer = document.createElement("div");
    var botMessageContainer = document.createElement("div");
    botMessageContainer.classList.add("message-container");
    userMessageContainer.classList.add("message-container");

    if (chatLog) {
        // Create a chat message element
        var userMessageElement = document.createElement("div");
        userMessageElement.classList.add("chat-message");
        userMessageElement.innerHTML = "<strong>You:</strong> ".concat(userInput);

        // Append the user message to the message container
        userMessageContainer.appendChild(userMessageElement);

        // Append the message container to the chat log
        chatLog.appendChild(userMessageContainer);

        // Process the user's message (you can replace this with your chatbot logic)
        var botResponse = "This is the chatbot's response.";

        // Display chatbot response in the chat log
        var botMessageElement = document.createElement("div");
        botMessageElement.classList.add("chat-message");
        botMessageElement.innerHTML = "<strong>Chatbot:</strong> ".concat(botResponse);

        // Append the bot response to the message container
        botMessageContainer.appendChild(botMessageElement);
        chatLog.appendChild(botMessageContainer);
    }
    // Clear the user input field
    var userInputField = document.getElementById("user-input");
    if (userInputField) {
        userInputField.value = "";
    }
}
