
const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");
let changeBackground = null;

startButton.addEventListener("click", onStartButton);
stopButton.addEventListener("click", onStopButton);

stopButton.setAttribute("disabled", "");

function onStartButton() {
    stopButton.toggleAttribute("disabled");
    startButton.setAttribute("disabled", "");
    changeBackground = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onStopButton() {
    startButton.toggleAttribute("disabled");
    stopButton.toggleAttribute("disabled");
    clearInterval(changeBackground);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}