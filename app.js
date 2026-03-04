const output = document.getElementById("output");
const promptForm = document.getElementById("prompt-form");
const promptLabel = document.getElementById("prompt-label");
const userInput = document.getElementById("user-input");
const restartButton = document.getElementById("restart-btn");

const prompts = [
  {
    key: "city",
    text: "Where is your crew meeting up? (City):",
  },
  {
    key: "vibe",
    text: "What is the overall vibe? (Chill/Wild/Intellectual):",
  },
  {
    key: "hobby",
    text: "What's a hobby you're personally obsessed with?:",
  },
];

let stepIndex = 0;
let answers = {
  city: "",
  vibe: "",
  hobby: "",
};

function addLine(text, className = "") {
  const line = document.createElement("p");
  line.className = `line ${className}`.trim();
  line.textContent = text;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

function buildNameOptions(city, vibe, hobby) {
  return [
    `The ${vibe} ${hobby} Project`,
    `${city} ${hobby} Union`,
    `${hobby} ${vibe} Lab`,
    `${city} ${vibe} Sanctuary`,
    `${city} ${vibe} ${hobby} Club`,
    `The ${vibe} ${hobby} of ${city}`,
    `${city} ${hobby} ${vibe} Society`,
    `${vibe} ${hobby} ${city} Collective`,
  ];
}

function toTitleCase(value) {
  return value
    .toLowerCase()
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ");
}

function updatePrompt() {
  promptLabel.textContent = prompts[stepIndex].text;
}

function printSessionHeader() {
  addLine("--- Welcome to the Social Club Name Generator ---");
  addLine("Type your answer and press Enter.", "prompt");
  addLine("");
}

function resetSession() {
  output.innerHTML = "";
  stepIndex = 0;
  answers = { city: "", vibe: "", hobby: "" };
  printSessionHeader();
  updatePrompt();
  userInput.value = "";
  userInput.focus();
}

function printRecommendation() {
  const options = buildNameOptions(answers.city, answers.vibe, answers.hobby);
  const selected = options[Math.floor(Math.random() * options.length)];
  addLine("");
  addLine(`Recommended Name: ${toTitleCase(selected)}`, "result");
  addLine("Use \"Start New Run\" to generate another one.", "prompt");
}

promptForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = userInput.value.trim();
  if (!value) {
    addLine("Input cannot be empty. Try again.", "error");
    userInput.focus();
    return;
  }

  const currentPrompt = prompts[stepIndex];
  answers[currentPrompt.key] = value;

  addLine(`${currentPrompt.text}`, "prompt");
  addLine(`> ${value}`, "input");

  userInput.value = "";
  stepIndex += 1;

  if (stepIndex < prompts.length) {
    updatePrompt();
    userInput.focus();
    return;
  }

  printRecommendation();
  stepIndex = 0;
  answers = { city: "", vibe: "", hobby: "" };
  updatePrompt();
  userInput.focus();
});

restartButton.addEventListener("click", resetSession);

resetSession();
