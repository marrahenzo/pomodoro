import Timer from 'tiny-timer';
import './style.scss';
import { updateTimer, updateStartButton } from './domFunctions';
const audioFile = require('../src/media/notification.wav');

//Global variable to determine timer state
enum state {
  POMODORO,
  REST
}
let currentState = state.POMODORO;

//Audio player
let audio = new Audio(audioFile);

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
  timer.stop();
  if (currentState == state.POMODORO) {
    currentState = state.REST;
    timer.start(getTimeValues().rest);
    updateTimer(getTimeValues().rest);
  } else {
    currentState = state.POMODORO;
    timer.start(getTimeValues().pomodoro);
    updateTimer(getTimeValues().pomodoro);
  }
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
  if (timer.status === 'stopped') {
    timer.start(getTimeValues().pomodoro);
    updateTimer(getTimeValues().pomodoro);
  } else {
    if (timer.status === 'paused') timer.resume();
    else timer.pause();
  }

  updateStartButton(timer.status);
});

resetButton.addEventListener('click', () => {
  timer.stop();
  updateStartButton(timer.status);
  updateTimer(getTimeValues().pomodoro);
});

//Update DOM timer every 1 second
timer.on('tick', (ms) => {
  updateTimer(ms);
});

timer.on('done', () => {
  restartTimer();
  audio.play();
});
