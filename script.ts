function sendMessage() {
    const userInput = (<HTMLInputElement>document.getElementById("user-input")).value;
    const chatLog = document.getElementById("chat-log");
    
    if (chatLog) {
        // Display user message in the chat log
        const userMessageElement = document.createElement("div");
        userMessageElement.classList.add("chat-message");
        userMessageElement.innerHTML = `<strong>You:</strong> ${userInput}`;
        chatLog.appendChild(userMessageElement);

        // Process the user's message (you can replace this with your chatbot logic)
        const botResponse = "This is the chatbot's response.";
        
        // Display chatbot response in the chat log
        const botMessageElement = document.createElement("div");
        botMessageElement.classList.add("chat-message");
        botMessageElement.innerHTML = `<strong>Chatbot:</strong> ${botResponse}`;
        chatLog.appendChild(botMessageElement);
    }

    // Clear the user input field
    const userInputField = <HTMLInputElement>document.getElementById("user-input");
    if (userInputField) {
        userInputField.value = "";
    }
}