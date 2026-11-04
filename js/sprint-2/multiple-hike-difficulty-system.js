// sprint 2

/*
basic difficulty rating system on a 1-10 scale.
1 mile = 1 pt.
500 feet elevation gain = 1 pt.
based on Petzoldt Energy Mile theory.
use for a page with multiple hikes listed.
*/

function getNumberFromClass(hikeElement, className) {
  const element = hikeElement.querySelector(`.${className}`);
  if (!element) return 0;
  return parseFloat(element.textContent.replace(/[^0-9.]/g, '')) || 0;
}

// Find all hike container elements on the page
const hikes = document.querySelectorAll('.hike');

hikes.forEach((hike) => {

const miles = getNumberFromClass(hike, 'length');
const elevationGain = getNumberFromClass(hike, 'elevationGain');

let pointCount = miles + (elevationGain / 500);
let rating = 0;

switch (true) {
    case pointCount < 3:    rating = 1; break;
    case pointCount < 5:    rating = 2; break;
    case pointCount < 7:    rating = 3; break;
    case pointCount < 9:    rating = 4; break;
    case pointCount < 11:   rating = 5; break;
    case pointCount < 14:   rating = 6; break;
    case pointCount < 17:   rating = 7; break;
    case pointCount < 21:   rating = 8; break;
    case pointCount < 26:   rating = 9; break;
    default:                rating = 10; break;
}

console.log({ miles, elevationGain, pointCount, rating });

const difficultyBand = rating <= 2 ? 'beginner'
    : rating <= 4 ? 'easy'
    : rating <= 6 ? 'moderate'
    : rating <= 8 ? 'hard'
    : 'strenuous';

// Save the calculated values on the hike card for the filter and CSS to use.
hike.setAttribute('data-difficulty-rating', String(rating));
hike.setAttribute('data-difficulty-band', difficultyBand);

const difficultyElement = hike.querySelector('.difficulty');
    if (difficultyElement) {
        difficultyElement.textContent = `Difficulty: ${rating}/10`;
    }
});