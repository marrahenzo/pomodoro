//Receive a value in milliseconds and return an string with
// the time in the "minutes:seconds" format
function millisecondsToMinutesAndSeconds(ms: number): string {
  const date = new Date(ms);
  return `${date.getMinutes()}:${
    date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  }`;
}

export { millisecondsToMinutesAndSeconds };
