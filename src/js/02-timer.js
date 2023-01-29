import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
require("flatpickr/dist/themes/dark.css");
import { Notify } from 'notiflix';


const inputEl = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose() {
        if (selectDate.selectedDates[0] > options.defaultDate) {
            startButton.disabled = false;
        } else {
            startButton.disabled = true;
            Notify.failure("Please choose a date in the future");
        };
    },
};

const selectDate = flatpickr(inputEl, options);
const timer = {
    intervalId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.intervalId = setInterval(() => {
            const actualDate = Date.now();
            const selectedDate = Date.parse(selectDate.selectedDates[0]);
            const interval = selectedDate - actualDate;
            if (interval > 0) {
                const { days, hours, minutes, seconds } = convertMs(interval);
                daysEl.textContent = addLeadingZero(days);
                hoursEl.textContent = addLeadingZero(hours);
                minutesEl.textContent = addLeadingZero(minutes);
                secondsEl.textContent = addLeadingZero(seconds);
            } else {
                clearInterval(this.intervalId);
                // startButton.disabled = false;
                // inputEl.disabled = false;
            }
        }, 1000);
    },
};

startButton.disabled = true;
startButton.addEventListener('click', onStartButton);

function onStartButton() {
    startButton.disabled = true;
    inputEl.disabled = true;
    timer.start();
};

function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}
