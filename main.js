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

const half = 'はん';
const tens = ['', 'じゅう', 'にじゅう', 'さんじゅう', 'よんじゅう', 'ごじゅう'];
const ji = '時';

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
