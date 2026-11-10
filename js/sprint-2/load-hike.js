// sprint 2

// all trails data storage for all hikes
const hikes = {
    "skyline-loop": {
        name: "Skyline Loop",
        length: "5.7 miles",
        elevationGain: "1,784ft",
        style: "Loop",
        difficulty: "Hard", // <-- this is Alltrails difficulty, not our own (ours is more accurate)
        surface: {natural: 45, gravel: 34, paved: 19, steps: 1, wood: 1}
    },
    "myrtle-falls": {
        name: "Myrtle Falls",
        length: "1 mile",
        elevationGain: "167ft",
        style: "Out and Back",
        difficulty: "Beginner",
        surface: {paved: 95, steps: 5}
    },
    "pinnacle-peak": {
        name: "Pinnacle Peak",
        length: "3 miles",
        elevationGain: "1,581ft",
        style: "Out and Back",
        difficulty: "Strenuous",
        surface: {natural: 87, unknown: 13}
    },
    "naches-peak-loop": {
        name: "Naches Peak Loop",
        length: "3.5 miles",
        elevationGain: "643ft",
        style: "Loop",
        difficulty: "Moderate",
        surface: {natural: 97, unknown: 3}
    },
    "fremont-lookout": {
        name: "Fremont Lookout",
        length: "5.8 miles",
        elevationGain: "1,108ft",
        style: "Out and Back",
        difficulty: "Moderate",
        surface: {natural: 93, unknown: 4, gravel: 3}
    },
    "burrough-mountain": {
        name: "Burrough Mountain",
        length: "8.9 miles",
        elevationGain: "2,467ft",
        style: "Out and Back",
        difficulty: "Hard",
        surface: {natural: 98, gravel: 2}
    },
    "high-rock-lookout": {
        name: "High Rock Lookout",
        length: "3.4 miles",
        elevationGain: "1,348ft",
        style: "Out and Back",
        difficulty: "Hard",
        terrain: "moderate"
    },
    "narada-falls": {
        name: "Narada Falls",
        length: "0.2 miles",
        elevationGain: "78ft",
        style: "Out and Back",
        difficulty: "Easy",
        surface: {natural: 100}
    },
    "nisqually-vista-trail": {
        name: "Nisqually Vista Trail",
        length: "1.1 miles",
        elevationGain: "180ft",
        style: "Loop",
        difficulty: "Easy",
        surface: {paved: 99, steps: 1}
    }
};

// read the "id" value from the browser's URL (e.g. ?id=skyline-loop)
const urlParams = new URLSearchParams(window.location.search);
const hikeId = urlParams.get('id');

// find the matching hike data
const hike = hikes[hikeId];

// inject the data into the page HTML elements
if (hike) {
    document.title = hike.name;
    document.getElementById('hikeName').textContent = hike.name;
    document.getElementById('hikeLength').textContent = `Length: ${hike.length}`;
    document.getElementById('hikeElevation').textContent = `Elevation Gain: ${hike.elevationGain}`;
    document.getElementById('hikeStyle').textContent = `Style: ${hike.style}`;
    document.getElementById('hikeDifficulty').textContent = `Difficulty: ${hike.difficulty}`;

    applyDifficultyRating(document.getElementById('hike-card'));
} else {
    document.getElementById('hike-card').innerHTML = "<h2>Hike not found.</h2>";
}