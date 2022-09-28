import { millisecondsToMinutesAndSeconds } from './helperFunctions';
import Timer from 'tiny-timer';

//Get DOM elements
const timer = document.querySelector('#timer')!;
const startButton = document.querySelector('#btn-start')!;

//Set DOM timer's value
function updateTimer(time: number): void {
  let newTime = millisecondsToMinutesAndSeconds(time);
  timer.textContent = newTime;
}

//Change start button's text
function updateStartButton(status: string): void {
  switch (status) {
    case 'running':
      startButton.textContent = 'Pause';
      break;
    case 'paused':
    case 'stopped':
      startButton.textContent = 'Start';
      break;
  }
}

export { updateTimer, updateStartButton };
