// const getChatbotResponse = () => {
//     return responseObj[userMessage]==undefined?"Please try something else":responseObj[userMessage]
// };


// const API_KEY = "kERC.QB.HaAo7juCj4P3ayh1EhyzPfc_EcrioohI";
// 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
// kERC.QB.HaAo7juCj4P3ayh1EhyzPfc_EcrioohI

// chatInput.addEventListener("keyup", (event)=> {
//     if (event.keycode === 13) {
       
//     }
// });
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const suggestionContainer = document.querySelector(".suggestions");
const chatbotToggler = document.querySelector(".chatbot-toggler");

let userMessage;
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "outgoing"
      ? `<p>${message}</p>`
      : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
};

const responseObj = {
  "what are the common signs of mental health issues?" : () => "Pay attention to changes in your mood, behavior, and daily functioning. If you notice persistent changes, consider seeking support from friends, family, or a mental health professional.",
  "how can i manage stress and anxiety in my daily life?": () => "Incorporate stress-reducing practices into your daily routine, such as regular exercise, mindfulness meditation, and setting realistic goals. Consider talking to someone you trust about your stressors.",
  "what are effective self-care strategies for promoting mental well-being?": () => "Prioritize self-care by ensuring you get enough sleep, eat healthily, engage in activities you enjoy, and set boundaries to avoid burnout. Take time for yourself without feeling guilty.",
  "what are the potential benefits of seeking professional help for mental health concerns?": () => "If you're struggling with your mental health, don't hesitate to reach out to a mental health professional. They can offer guidance, support, and evidence-based interventions tailored to your needs.",
  "what are some warning signs that i should seek professional help for my mental health?" : () => "If you experience persistent symptoms like sadness, changes in sleep or appetite, difficulty concentrating, or thoughts of self-harm, seek professional help promptly. Early intervention is crucial for effective support.",
  "how can i build resilience to better cope with life's challenges?" : () => "Cultivate a positive mindset, develop problem-solving skills, and seek support during challenging times. Focus on personal growth and the ability to bounce back from adversity.",
  "if i'm seeking for professional health are there any hotlines?" : () => "I recommend these hotlines to call. Hopeline Philippines: Phone: 0917-558-HOPE (4673) Website: Hopeline Philippines National Center for Mental Health (NCMH), Crisis Hotline: Phone: 0917-899-8727 (USAP) Website: National Center for Mental Health, UST Graduate School Psychotrauma Clinic (for trauma-related concerns): Phone: 406-1611 local 4012 Website: UST Psychotrauma Clinic, Philippine Mental Health Association (PMHA): Phone: (02) 7729-2003 / (02) 7729-1026 Email: pmha_inc@yahoo.com Website: Philippine Mental Health Association, Crisis Line Philippines: Phone: (02) 893-7606 / 0917-800-1123 / 0922-893-8944 Website: Crisis Line Philippines",
};

const getChatbotResponse = (userMessage) => {
  const formattedUserMessage = userMessage.trim().toLowerCase();
  return responseObj.hasOwnProperty(formattedUserMessage)
    ? responseObj[formattedUserMessage]()
    : "Please try something else";
};

const renderChatMessage = (message, className) => {
  const chatLi = createChatLi(message, className);
  chatbox.appendChild(chatLi);
  setScrollPosition();
};

const renderChatbotResponse = () => {
  const res = getChatbotResponse(userMessage);
  renderChatMessage(res, "incoming");
};

const updateSuggestions = (suggestions) => {
  suggestionContainer.innerHTML = "";
  suggestions.forEach((suggestion) => {
    const suggestionItem = document.createElement("div");
    suggestionItem.textContent = suggestion;
    suggestionItem.addEventListener("click", () => handleSuggestionClick(suggestion));
    suggestionContainer.appendChild(suggestionItem);
  });
};

const handleSuggestionClick = (suggestion) => {
  chatInput.value = suggestion;
  handleChat();
};

const handleChat = () => {
  userMessage = chatInput.value.trim().toLowerCase();
  if (!userMessage) return;

  renderChatMessage(userMessage, "outgoing");

  chatInput.value = "";
  chatInput.placeholder = "Select or type...";
  chatInput.style.height = `${inputInitHeight}px`;
  updateSuggestions([]); // Clear suggestions
  setTimeout(() => {
    renderChatbotResponse();
  }, 600);
};

const handleInput = () => {
  userMessage = chatInput.value.trim().toLowerCase();
  const suggestions = getSuggestions(userMessage);
  updateSuggestions(suggestions);
};

const handleEnterKey = (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    handleChat();
  }
};

chatInput.addEventListener("input", () => {
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

sendChatBtn.addEventListener("click", handleChat);
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
chatInput.addEventListener("keydown", handleEnterKey);
chatInput.addEventListener("input", handleInput);

const setScrollPosition = () => {
  if (chatbox.scrollHeight > 0) {
    chatbox.scrollTop = chatbox.scrollHeight;
  }
};

const getSuggestions = (input) => {
  const allSuggestions = ["What are the common signs of mental health issues?", "how can I manage stress and anxiety in my daily life?", "what are effective self-care strategies for promoting mental well-being?", "what are the potential benefits of seeking professional help for mental health concerns?", "what are some warning signs that I should seek professional help for my mental health?", "how can I build resilience to better cope with life's challenges?", "If I'm seeking for professional health are there any hotlines?"];
  return allSuggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(input)
  );
};


  
// const chatInput = document.getElementById("chatInput");
// const sendChatBtn = document.getElementById("sendChatBtn");
// const chatbox = document.querySelector(".chatbox");

// let userMessage;

// const createChatLi = (message, className) => {
//   const chatLi = document.createElement("li");
//   chatLi.classList.add("chat", className);
//   let chatContent =
//     className === "outgoing"
//       ? `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`
//       : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
//   chatLi.innerHTML = chatContent;
//   return chatLi;
// };

// const responseObj = {
//   hello: "Hey! How are you doing?",
//   hey: "Hey! What's up",
//   today: new Date().toDateString(),
//   time: new Date().toLocaleTimeString(),
// };

// const getChatbotResponse = (userMessage) => {
//   return responseObj[userMessage.toLowerCase()] || "Please try something else";
// };

// const renderChatMessage = (message, className) => {
//   const chatLi = createChatLi(message, className);
//   chatbox.appendChild(chatLi);
//   setScrollPosition();
// };

// const renderChatbotResponse = () => {
//   const selectedOption = chatInput.value.trim().toLowerCase();
//   if (!selectedOption || selectedOption === "") return;

//   const res = getChatbotResponse(selectedOption);
//   renderChatMessage(res, "incoming");
// };

// const handleChat = () => {
//   const selectedOption = chatInput.value.trim().toLowerCase();
//   if (!selectedOption || selectedOption === "") return;

//   renderChatMessage(selectedOption, "outgoing");

//   chatInput.value = ""; // Reset the input
//   setTimeout(() => {
//     renderChatbotResponse();
//   }, 600);
// };

// sendChatBtn.addEventListener("click", handleChat);

// const setScrollPosition = () => {
//   if (chatbox.scrollHeight > 0) {
//     chatbox.scrollTop = chatbox.scrollHeight;
//   }
// };






