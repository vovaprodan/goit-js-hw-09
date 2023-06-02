const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body')



buttonStart.addEventListener('click', onClickBtn)


function onClickBtn(event) {
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
    timerId = setInterval(() => {
     body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

buttonStop.addEventListener("click", () => {
  clearInterval(timerId);

});