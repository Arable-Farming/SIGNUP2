// Define translations for English and Hindi
const translations = {
  en: {
    welcome: "Welcome! How can I assist you today?",
    selectLanguage: "Please select a language: English or Hindi.",
    greeting: "Hello! How can I assist you today?",
    fallback: "I'm not sure about that, but I'm learning!"
  },
  hi: {
    welcome: "स्वागत है! मैं आपकी किस प्रकार सहायता कर सकता हूँ?",
    selectLanguage: "कृपया एक भाषा चुनें: अंग्रेजी या हिंदी।",
    greeting: "नमस्ते! मैं आपकी किस प्रकार सहायता कर सकता हूँ?",
    fallback: "मुझे उस बारे में पता नहीं है, लेकिन मैं सीख रहा हूँ!"
  }
};

// Set default language
let currentLanguage = 'en';

// Function to handle keypress events
function handleKeyPress(event) {
  if (event.key === "Enter") {
    handleSubmit();
  }
}

// Function to handle form submission
function handleSubmit() {
  const userInput = document.getElementById("user-input").value;
  if (userInput.trim() === "") return;

  // Append user message
  appendMessage(userInput, 'user-message');
  
  // Simulate bot response (this should be replaced with real AI response logic)
  const botResponse = getBotResponse(userInput);
  setTimeout(() => {
    appendMessage(botResponse, 'bot-message');
  }, 1000); // Simulate delay
}

// Function to type out the message character by character
function typeMessage(messageElement, message, index = 0, speed = 50) {
  if (index < message.length) {
    messageElement.textContent += message.charAt(index);
    index++;
    setTimeout(() => typeMessage(messageElement, message, index, speed), speed);
  }
}

// Function to append messages to the chatbox with typing animation
function appendMessage(message, className) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");
  messageElement.className = `chat-message ${className}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
  
  // Start typing animation
  typeMessage(messageElement, message);
  document.getElementById("user-input").value = '';
}

// Function to get the bot's response based on user input
function getBotResponse(userInput) {
  // Simple logic for demonstration purposes
  if (userInput.toLowerCase().includes("hello")) {
    return translations[currentLanguage].greeting;
  } else {
    return translations[currentLanguage].fallback;
  }
}

// Function to display the language selection prompt
function showLanguageSelector() {
  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML = `
    <div class="chat-message bot-message">
      ${translations[currentLanguage].selectLanguage}
    </div>
    <div class="language-buttons">
      <button class="language-button" onclick="setLanguage('en')">English</button>
      <button class="language-button" onclick="setLanguage('hi')">Hindi</button>
    </div>
  `;
}

// Function to set the selected language and display a welcome message
function setLanguage(language) {
  currentLanguage = language;
  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML = '';
  appendMessage(translations[currentLanguage].welcome, 'bot-message');
}

// Initialize the chatbox with the language selector when the page loads
document.addEventListener("DOMContentLoaded", () => {
  showLanguageSelector();
});
