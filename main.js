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
const tens = ['', 'じゅう', 'にじゅう', 'さんじゅう', 'よんじゅう', 'ごじゅう'];

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
    } else {
        const [minTen, minOne] = `${min}`.split('');
        return `${tens[minTen]}${minutes[minOne]}`;
    }
}

function getTimeInJapanese(hour, min) {
    const prefix = hour < 12 ? am : pm;
    const hourByTwelwe = hour > 12 ? hour - 12 : hour;
    const minuteString = getMinutesString(min);

    return `${prefix}${hours[hourByTwelwe]}時${minuteString}`;
}

console.log(getTimeInJapanese(0, 45));
