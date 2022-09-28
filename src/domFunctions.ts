import { millisecondsToMinutesAndSeconds } from './helperFunctions';

//Get DOM timer
const timer = document.querySelector('#timer')!;

//Set DOM timer's value
function updateTimer(time: number): void {
  let newTime = millisecondsToMinutesAndSeconds(time);
  timer.textContent = newTime;
}

export { updateTimer };
