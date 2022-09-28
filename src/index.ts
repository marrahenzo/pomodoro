import Timer from 'tiny-timer';
import './style.scss';
import { updateTimer, updateStartButton } from './domFunctions';

//Get time values from form inputs
const pomodoroInput = document.querySelector(
  '#time-pomodoro'
) as HTMLInputElement;
const restInput = document.querySelector('#time-rest') as HTMLInputElement;

//Convert values to milliseconds
function getTimeValues() {
  let pomodoroTime = parseInt(pomodoroInput.value) * 60000;
  let restTime = parseInt(restInput.value) * 60000;
  return { pomodoro: pomodoroTime, rest: restTime };
}

//Get DOM buttons
const startButton = document.querySelector('#btn-start')!;
const restartButton = document.querySelector('#btn-restart')!;

//Create new timer and set start button behavior
const timer = new Timer({ interval: 100 });
startButton.addEventListener('click', () => {
  updateStartButton();

  if (!startButton.classList.contains('started')) {
    timer.start(getTimeValues().pomodoro);
    updateTimer(getTimeValues().pomodoro);
    startButton.classList.add('started');
  } else {
    if (startButton.classList.contains('paused')) timer.resume();
    else timer.pause();
    startButton.classList.toggle('paused');
  }
});

//Update DOM timer every 1 second
timer.on('tick', (ms) => {
  console.log(ms);
  updateTimer(ms);
});
