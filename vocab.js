import { getRandom } from './utils.js';

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
    // TODO: figure out how to handle this case
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

export function getTimeInJapanese(hour, min) {
    const prefix = hour < 12 ? am : pm;
    const hourByTwelwe = hour > 12 ? hour - 12 : hour;
    const minuteString = getMinutesString(min);

    return `${prefix}${hours[hourByTwelwe]}時${minuteString}`;
}
