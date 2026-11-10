// Sprint 2 difficulty rating system.

/*
difficulty rating system on a 1-10 scale.
1 mile = 1 pt.
500 feet elevation gain = 1 pt.
based on Petzoldt Energy Mile theory.
*/

function getNumberFromClass(hikeElement, className) {
    const element = hikeElement.querySelector(`.${className}`);
    if (!element) return 0;
    return parseFloat(element.textContent.replace(/[^0-9.]/g, '')) || 0;
}

function applyDifficultyRating(hikeElement) {
    if (!hikeElement) return;

    const miles = getNumberFromClass(hikeElement, 'length');
    const elevationGain = getNumberFromClass(hikeElement, 'elevationGain');
    const pointCount = miles + (elevationGain / 500);

    let rating;
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

    const difficultyBand = rating <= 2 ? 'beginner'
        : rating <= 4 ? 'easy'
        : rating <= 6 ? 'moderate'
        : rating <= 8 ? 'hard'
        : 'strenuous';

    hikeElement.setAttribute('data-difficulty-rating', String(rating));
    hikeElement.setAttribute('data-difficulty-band', difficultyBand);

    const difficultyElement = hikeElement.querySelector('.difficulty');
    if (difficultyElement) {
        difficultyElement.textContent = `Difficulty: ${rating}/10`;
    }

    console.log({ miles, elevationGain, pointCount, rating });
}

function applyDifficultyRatings() {
    document.querySelectorAll('.hike').forEach(applyDifficultyRating);
}

const SURFACE_WEIGHTS = {
    paved: 1.0,
    wood: 1.0,
    gravel: 1.05,
    natural: 1.1,
    sand: 1.2,
    steps: 1.3,
    rock: 1.4,
    snow: 1.5
};

// Fallback weights when surface data is unavailable.
const TERRAIN_TAGS = {
    smooth: 1.0,
    moderate: 1.15,
    rough: 1.3,
    technical: 1.5
};

applyDifficultyRatings();
