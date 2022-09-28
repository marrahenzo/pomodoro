import { millisecondsToMinutesAndSeconds } from './helperFunctions';

//Get DOM elements
const timer = document.querySelector('#timer')!;
const startButton = document.querySelector('#btn-start')!;

//Set DOM timer's value
function updateTimer(time: number): void {
  let newTime = millisecondsToMinutesAndSeconds(time);
  timer.textContent = newTime;
}

//Change start button's text
function updateStartButton() {
  if (startButton.textContent == 'Start') {
    startButton.textContent = 'Pause';
  } else {
    startButton.textContent = 'Start';
  }
}

export { updateTimer, updateStartButton };
