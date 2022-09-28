//Receive a value in milliseconds and return an string with
// the time in the "minutes:seconds" format
function millisecondsToMinutesAndSeconds(ms: number): string {
  let minutes = Math.round(ms / 1000 / 60);
  let seconds = Math.round((ms % 60000) / 1000);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

export { millisecondsToMinutesAndSeconds };
