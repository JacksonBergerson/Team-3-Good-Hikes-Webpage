// all trails data storage for all hikes
const hikes = {
    "skyline-loop": {
        name: "Skyline Loop",
        length: "5.7 miles",
        elevationGain: "1,784ft",
        style: "Loop",
        difficulty: "Hard" // <-- this is Alltrails difficulty, not our own (ours is more accurate)
    },
    "myrtle-falls": {
        name: "Myrtle Falls",
        length: "1 mile",
        elevationGain: "167ft",
        style: "Out and Back",
        difficulty: "Beginner"
    },
    "pinnacle-peak": {
        name: "Pinnacle Peak",
        length: "3 miles",
        elevationGain: "1,581ft",
        style: "Out and Back",
        difficulty: "Strenuous"
    },
    "naches-peak-loop": {
        name: "Naches Peak Loop",
        length: "3.5 miles",
        elevationGain: "643ft",
        style: "Loop",
        difficulty: "Moderate"
    },
    "fremont-lookout": {
        name: "Fremont Lookout",
        length: "5.8 miles",
        elevationGain: "1,108ft",
        style: "Out and Back",
        difficulty: "Moderate"
    },
    "burrough-mountain": {
        name: "Burrough Mountain",
        length: "8.9 miles",
        elevationGain: "2,467ft",
        style: "Out and Back",
        difficulty: "Hard"
    },
    "high-rock-lookout": {
        name: "High Rock Lookout",
        length: "3.4 miles",
        elevationGain: "1,348ft",
        style: "Out and Back",
        difficulty: "Hard"
    },
    "narada-falls": {
        name: "Narada Falls",
        length: "0.2 miles",
        elevationGain: "78ft",
        style: "Out and Back",
        difficulty: "Easy"
    },
    "nisqually-vista-trail": {
        name: "Nisqually Vista Trail",
        length: "1.1 miles",
        elevationGain: "180ft",
        style: "Loop",
        difficulty: "Easy"
    }
};

// read the "id" value from the browser's URL (e.g. ?id=skyline-loop)
const urlParams = new URLSearchParams(window.location.search);
const hikeId = urlParams.get('id');

// find the matching hike data
const hike = hikes[hikeId];

// 4. Inject the data into the page HTML elements
if (hike) {
    document.title = hike.name;
    document.getElementById('hikeName').textContent = hike.name;
    document.getElementById('hikeLength').textContent = `Length: ${hike.length}`;
    document.getElementById('hikeElevation').textContent = `Elevation Gain: ${hike.elevationGain}`;
    document.getElementById('hikeStyle').textContent = `Style: ${hike.style}`;
    document.getElementById('hikeDifficulty').textContent = `Difficulty: ${hike.difficulty}`;

    applyDifficultyRating();
} else {
    document.getElementById('hike-card').innerHTML = "<h2>Hike not found.</h2>";
}