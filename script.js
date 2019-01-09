const hoursDiv = document.getElementById('hours');
const minutesDiv = document.getElementById('minutes');
const secondsDiv = document.getElementById('seconds');

const getSecondsFromTime = (hours, minutes, seconds) =>
  hours * 60 * 60 + minutes * 60 + seconds;

const getHoursCount = seconds => Math.floor(seconds / 60 / 60);
const getMinutesCount = seconds => Math.floor((seconds / 60) % 60);
const getSecondsCount = time => time % 60;

const getTime = function() {
  const hours = +hoursDiv.value;
  const minutes = +minutesDiv.value;
  const seconds = +secondsDiv.value;
  return getSecondsFromTime(hours, minutes, seconds);
};

const getRemainingTime = function(time) {
  const hours = getHoursCount(time);
  const minutes = getMinutesCount(time);
  const seconds = getSecondsCount(time);

  return { hours, minutes, seconds };
};

const displayRemainingTime = function({ hours, minutes, seconds }) {
  hoursDiv.value = hours;
  minutesDiv.value = minutes;
  secondsDiv.value = seconds;
};

const disableInputBoxes = function() {
  hoursDiv.disabled = 'disabled';
  minutesDiv.disabled = 'disabled';
  secondsDiv.disabled = 'disabled';
};

const startCountDown = function(totalSeconds) {
  let timer = setInterval(() => {
    if (totalSeconds == 0) clearInterval(timer);
    let remainingTime = getRemainingTime(totalSeconds--);
    displayRemainingTime(remainingTime);
  }, 1000);
};

const startTimer = function() {
  const totalSeconds = getTime();
  disableInputBoxes();
  startCountDown(totalSeconds);
};
