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

const half = 'はん';
const am = 'ごぜん';
const pm = 'ごご';

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getTimeInJapanese(hour, min) {
    const prefix = hour < 12 ? am : pm;
    const hourByTwelwe = hour > 12 ? hour - 12 : hour;
    // TODO: handling of 半
    const [minTen, minOne] = `${min}`.split('');
    return `${prefix}${hours[hourByTwelwe]}時${tens[minTen]}${minutes[minOne]}`;
}
