import { millisecondsToMinutesAndSeconds } from './helperFunctions';

//Get DOM elements
const timer = document.querySelector('#timer')! as HTMLParagraphElement;
const startButton = document.querySelector('#btn-start')!;
const counter = document.querySelector('#counter')!;

//Set DOM timer's value
function updateTimer(time: number): void {
  let newTime = millisecondsToMinutesAndSeconds(time);
  timer.textContent = newTime;
  updateTabName(newTime);
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

//Update pomodoro counter
function updatePomodoroCounter(count: number): void {
  counter.textContent = `You have completed ${count} pomodoro(s)`;
}

function changeTimerColor(color: string): void {
  timer.style.color = color;
}

//Sets the tab name to the current time
function updateTabName(time: string): void {
  document.title = `Pomodoro App ${time}`;
}

export {
  updateTimer,
  updateStartButton,
  updatePomodoroCounter,
  changeTimerColor
};
