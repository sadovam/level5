import * as moment from 'moment';

const timeLabel = document.getElementById('timer__time');

function toggleButtons() {
  timeLabel.innerHTML = '0';
  const elms = document.getElementsByClassName('btn');
  for (let i = 0; i < elms.length; i += 1) {
    elms[i].classList.toggle('hidden');
  }
}

function tick(time: number) {
  timeLabel.innerHTML = moment.unix(time).format('mm:ss');
  if (time === 0) {
    toggleButtons();
    return;
  }
  setTimeout(() => tick(time - 1), 1000);
}

function incTime() {
  const timeDuration = Number(timeLabel.innerHTML) + 1;
  timeLabel.innerHTML = String(timeDuration);
}

function decTime() {
  let timeDuration = Number(timeLabel.innerHTML);
  if (timeDuration > 0) timeDuration -= 1;
  timeLabel.innerHTML = String(timeDuration);
}

function start() {
  const timeDuration = Number(timeLabel.innerHTML) * 60;
  if (timeDuration === 0) return;
  toggleButtons();
  tick(timeDuration);
}

const incBtn = document.getElementById('timer__inc-btn');
incBtn.onclick = incTime;
const decBtn = document.getElementById('timer__dec-btn');
decBtn.onclick = decTime;
const startBtn = document.getElementById('timer__start-btn');
startBtn.onclick = start;
