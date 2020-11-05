console.log('working');

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
    'じゅっぷん',
];

const half = 'はん';
const tenPrefix = 'じゅう';

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 0; i < 50; i++) {
    console.log(getRandom(0, 10));
}
