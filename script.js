function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatLog = document.getElementById("chat-log");

    if (chatLog) {
        // Create message containers
        var userMessageContainer = createMessageContainer("user");
        var botMessageContainer = createMessageContainer("bot");

        // Create user message element
        var userMessageElement = createChatMessageElement("user", userInput);

        // Append the user message to the message container
        addMessageToContainer(userMessageContainer, userMessageElement);
        chatLog.appendChild(userMessageContainer);

        // Process the user's message (you can replace this with your chatbot logic)
        var botResponse = "This is the chatbot's response.";

        // Create bot response element
        var botMessageElement = createChatMessageElement("bot", botResponse);

        // Append the bot response to the message container
        addMessageToContainer(botMessageContainer, botMessageElement);
        chatLog.appendChild(botMessageContainer);
    }

    // Clear the user input field
    var userInputField = document.getElementById("user-input");
    if (userInputField) {
        userInputField.value = "";
    }
}

function createMessageContainer(profile) {
    var messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container");
    messageContainer.classList.add(profile + "-message");
    return messageContainer;
}

function createChatMessageElement(profile, messageText) {
    var chatMessageElement = document.createElement("div");
    chatMessageElement.classList.add("chat-message");    
    chatMessageElement.innerHTML = "<p>" + messageText + "</p>";
    
    return chatMessageElement;
}

function addMessageToContainer(container, message) {
    var profilePic = document.createElement("img");
    if (container.classList.contains("bot-message")) {
        profilePic.src = "public/bot.png";
        container.appendChild(profilePic);
        container.appendChild(message);
    } else if (container.classList.contains("user-message")) {
        profilePic.src = "public/me.jpg";
        container.appendChild(message);
        container.appendChild(profilePic);
    }
}