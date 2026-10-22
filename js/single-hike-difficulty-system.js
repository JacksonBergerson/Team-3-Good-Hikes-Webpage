/*
basic difficulty rating system on a 1-10 scale.
1 mile = 1 pt.
500 feet elevation gain = 1 pt.
based on Petzoldt Energy Mile theory.
*/

function getNumberFromClass(className) {
  const element = document.querySelector(`.${className}`);
  if (!element) return 0;
  return parseFloat(element.textContent.replace(/[^0-9.]/g, '')) || 0;
}

const miles = getNumberFromClass('length');
const elevationGain = getNumberFromClass('elevationGain');

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