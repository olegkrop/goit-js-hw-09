const refs = {
    start: document.querySelector('[data-start]'),
    stop: document.querySelector('[data-stop]'),
};
let interval = 0;

refs.start.addEventListener('click', onStartButton);
refs.stop.addEventListener('click', onStopButton);

function onStartButton() {
    refs.start.setAttribute('disabled', '');
    interval = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onStopButton() {
    refs.start.removeAttribute('disabled');
    clearInterval(interval);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}