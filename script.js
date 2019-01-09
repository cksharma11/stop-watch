const hoursDiv = document.getElementById('hours');
const minutesDiv = document.getElementById('minutes');
const secondsDiv = document.getElementById('seconds');
let totalSeconds = 0;

const getTime = function() {
  const hours = +hoursDiv.value;
  const minutes = +minutesDiv.value;
  const seconds = +secondsDiv.value;
  return hours * 60 * 60 + minutes * 60 + seconds;
};

const getRemainingTime = function(time) {
  let hours = Math.floor(time / 60 / 60);
  let minutes = Math.floor((time / 60) % 60);
  let seconds = time % 60;
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

const startCountDown = function() {
  let timer = setInterval(() => {
    if (totalSeconds == 0) {
      clearInterval(timer);
    }
    let remainingTime = getRemainingTime(totalSeconds--);
    displayRemainingTime(remainingTime);
  }, 1000);
};

const startTimer = function() {
  totalSeconds = getTime();
  disableInputBoxes();
  startCountDown();
};
