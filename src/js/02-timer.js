import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const buttonStart = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]')
const hours = document.querySelector('span[data-hours]')
const minutes = document.querySelector('span[data-minutes]')
const seconds = document.querySelector('span[data-seconds]')
let timerId;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const date = new Date();
    if (selectedDates[0] < date) {
      window.alert("Please choose a date in the future");
      buttonStart.disable = true;
    } else {
      buttonStart.disable = false;
    }
    function onStartBtn() {
      timerId = setInterval(() => {
        const currrentDate = new Date();
        const currrentTime = selectedDates[0] - currrentDate;

        days.textContent = convertMs(currrentTime).days
        hours.textContent = convertMs(currrentTime).hours
        minutes.textContent = convertMs(currrentTime).minutes
        seconds.textContent = convertMs(currrentTime).seconds

         if (currrentTime < 1000 && currrentTime > 0) {
          clearInterval(timerId);
        }
        // console.log(convertMs(currrentTime))
  }, 1000);
    }
   

buttonStart.addEventListener('click',onStartBtn)
  },
};

flatpickr('#datetime-picker', options);



function addLeadingZero(value) {
  return String(value).padStart(2,'0')
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

