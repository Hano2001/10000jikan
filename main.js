import { getTimeInJapanese } from './vocab.js';
import { getRandom } from './utils.js';

const time = document.getElementById('time');
const pronounciationText = document.getElementById('pronounciation');
const button = document.getElementById('button');

const hour = getRandom(0, 23);
const min = getRandom(0, 59);
const hourText = `${hour}`.padStart(2, '0');
const minText = `${min}`.padStart(2, '0');
const timeText = `${hourText}:${minText}`;
time.textContent = timeText;

button.addEventListener('click', () => {
    pronounciationText.textContent = getTimeInJapanese(hour, min);
});
