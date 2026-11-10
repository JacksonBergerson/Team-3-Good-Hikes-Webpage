// Sprint 2 difficulty rating system

/*
difficulty rating system on a 1-10 scale
1 mile = 1 pt.
500 feet elevation gain = 1 pt.
based on Petzoldt Energy Mile theory
*/

function getNumberFromClass(hikeElement, className) {
    const element = hikeElement.querySelector(`.${className}`);
    if (!element) return 0;

    // remove words and units such as "miles" and "ft", leaving just the number
    const numberText = element.textContent.replace(/[^0-9.]/g, '');
    const number = parseFloat(numberText);

    // parseFloat returns NaN when the text does not contain a valid number
    if (Number.isNaN(number)) {
        return 0;
    }

    return number;
}

function applyDifficultyMultiplier(pointCount, hike) {
    if (hike.surface) {
        /*
        hike.surface is an object where each property name is a surface and
        its value is the percentage of the trail made up of that surface
        for example: { paved: 50, gravel: 50 }
        */
        let totalPercentage = 0;

        // add up the percentages so we can divide by their total later
        // a for in loop visits each property name, such as "paved" or "gravel"
        for (const surface in hike.surface) {
            const percentage = hike.surface[surface];
            totalPercentage += percentage;
        }

        if (totalPercentage > 0) {
            let totalWeightedSurface = 0;

            // multiply each surface's weight by how much of the trail it covers
            for (const surface in hike.surface) {
                const percentage = hike.surface[surface];
                let surfaceWeight = SURFACE_WEIGHTS[surface];

                // use a neutral weight when a surface has no entry in SURFACE_WEIGHTS
                if (!surfaceWeight) {
                    surfaceWeight = 1;
                }

                totalWeightedSurface += (surfaceWeight * percentage);
            }

            // divide by the total percentage to get the trail's average surface weight
            const averageSurfaceWeight = totalWeightedSurface / totalPercentage;
            return pointCount * averageSurfaceWeight;
        }
    }

    // if surface percentages are missing, use the hike's terrain tag instead
    let terrainWeight = 1;

    if (hike.terrain && TERRAIN_TAGS[hike.terrain] !== undefined) {
        terrainWeight = TERRAIN_TAGS[hike.terrain];
    }

    return pointCount * terrainWeight;
}

function applyDifficultyRating(hikeElement, hike) {
    // stop if there is no hike card to update
    if (!hikeElement) {
        return;
    }

    // some hike cards may not have extra hike data, so use an empty object
    if (!hike) {
        hike = {};
    }

    const miles = getNumberFromClass(hikeElement, 'length');
    const elevationGain = getNumberFromClass(hikeElement, 'elevationGain');
    const elevationPoints = elevationGain / 500;
    const startingPointCount = miles + elevationPoints;

    // adjust the starting score to account for the hike's surface or terrain
    const pointCount = applyDifficultyMultiplier(startingPointCount, hike);

    // convert the effort score into a rating from 1 to 10
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

    // save the rating on the card so other page features, like filtering, can use it
    hikeElement.setAttribute('data-difficulty-rating', String(rating));
    hikeElement.setAttribute('data-difficulty-band', difficultyBand);

    // show the calculated rating on the page if this card has a difficulty label
    const difficultyElement = hikeElement.querySelector('.difficulty');
    if (difficultyElement) {
        difficultyElement.textContent = `Difficulty: ${rating}/10`;
    }

}

function applyDifficultyRatings() {
    // calculate a rating for every hike card on the current page
    document.querySelectorAll('.hike').forEach(applyDifficultyRating);
}

// a larger weight means the surface takes more effort to hike
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

// terrain weights are used as a fallback when a hike has no surface percentages
const TERRAIN_TAGS = {
    smooth: 1.0,
    moderate: 1.15,
    rough: 1.3,
    technical: 1.5
};

applyDifficultyRatings();
