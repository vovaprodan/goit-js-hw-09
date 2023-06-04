const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body')
let intervalId; 

startButton.addEventListener('click', () => {
  if (!intervalId) {
    startButton.disabled = true;
    stopButton.disabled = false; 

    intervalId = setInterval(() => {
 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
  
      const color = getRandomHexColor();
      document.body.style.backgroundColor = color;
    }, 1000); // 

  }
});

stopButton.addEventListener('click', () => {

  if (intervalId) {
    clearInterval(intervalId); 
    intervalId = null; 
    startButton.disabled = false; 
    stopButton.disabled = true; 
  }
});

