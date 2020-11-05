const hours = [
    'れい',
    'いち',
    'に',
    'さん',
    'よ',
    'ご',
    'ろく',
    'しち',
    'はち',
    'く',
    'じゅう',
    'じゅういち',
    'じゅうに'
];
const minutes = [
    '',
    'いっぷん',
    'にふん',
    'さんぷん',
    'よんぷん',
    'ごふん',
    'ろっぷん',
    'ななふん',
    'はっぷん/はちふん',
    'きゅうふん',
    'じゅっぷん'
];
const tenPrefixes = [
    '',
    'じゅう',
    'にじゅう',
    'さんじゅう',
    'よんじゅう',
    'ごじゅう'
];
const evenTens = [
    'じゅっぷん',
    'にじゅっぷん',
    'さんじゅっぷん',
    'よんじゅっぷん',
    'ごじゅっぷん'
];
const am = 'ごぜん';
const pm = 'ごご';

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getMinutesString(min) {
    if (!min) {
        return '';
    } else if (min === 30) {
        return 'はん';
    } else if (min < 10) {
        return minutes[min];
    } else if (!(min % 10)) {
        return evenTens[min / 10 - 1];
    } else {
        const [minTen, minOne] = `${min}`.split('');
        return `${tenPrefixes[minTen]}${minutes[minOne]}`;
    }
}

function getTimeInJapanese(hour, min) {
    const prefix = hour < 12 ? am : pm;
    const hourByTwelwe = hour > 12 ? hour - 12 : hour;
    const minuteString = getMinutesString(min);

    return `${prefix}${hours[hourByTwelwe]}時${minuteString}`;
}
const timeText = document.getElementById('time');
const pronounciationText = document.getElementById('pronounciation');
const button = document.getElementById('button');

const hour = getRandom(0, 23);
const min = getRandom(0, 59);
const hourText = `${hour}`.padStart(2, '0');
const minText = `${min}`.padStart(2, '0');
const time = `${hourText}:${minText}`;
timeText.textContent = time;

button.addEventListener('click', () => {
    pronounciationText.textContent = getTimeInJapanese(hour, min);
});
