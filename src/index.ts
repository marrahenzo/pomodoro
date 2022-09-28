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

//Restart timer
function restartTimer() {
  startButton.classList.remove('paused');
  startButton.classList.remove('started');
  updateTimer(getTimeValues().pomodoro);
}

//Get DOM buttons
const startButton = document.querySelector('#btn-start')!;
const resetButton = document.querySelector('#btn-reset')!;

//Create new timer
const timer = new Timer({ interval: 100 });
updateTimer(getTimeValues().pomodoro);

//Update DOM based on time input
pomodoroInput.addEventListener('change', () => {
  updateTimer(getTimeValues().pomodoro);
});

//Start and reset button behavior
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

resetButton.addEventListener('click', restartTimer);

//Update DOM timer every 1 second
timer.on('tick', (ms) => {
  updateTimer(ms);
});

timer.on('done', () => {
  restartTimer();
});
