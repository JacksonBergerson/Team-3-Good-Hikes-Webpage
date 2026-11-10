// sprint 2

// all trails data storage for all hikes (add hikes here)
const hikes = {
    "skyline-loop": {
        name: "Skyline Loop",
        length: "5.7 miles",
        elevationGain: "1,784ft",
        style: "Loop",
        difficulty: "Hard", // <-- this is Alltrails difficulty, not our own (ours is more accurate)
        surface: {natural: 45, gravel: 34, paved: 19, steps: 1, wood: 1},
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTQxNzUxNjMzL2E1NmY0MDhiOWZiMGE5MGJiNjhlNTAwYmQ0YTg2NjdkLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjIwNDgiLCJoZWlnaHQiOiIyMDQ4IiwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19"
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
    },
};

// read the "id" value from the browser's URL (e.g. ?id=skyline-loop)
const urlParams = new URLSearchParams(window.location.search);
const hikeId = urlParams.get('id');

// find the matching hike data
const hike = hikes[hikeId];

// find out whether this is the details page or the all-hikes page
const hikeCard = document.getElementById('hike-card'); // page with one hike's details
const hikeList = document.querySelector('.hike-list'); // page with all hikes listed

if (hikeCard) {
    // on the details page, fill in the one hike selected by the URL
    if (hike) {
        document.title = hike.name;
        document.getElementById('hikeName').textContent = hike.name;
        document.getElementById('hikeLength').textContent = `Length: ${hike.length}`;
        document.getElementById('hikeElevation').textContent = `Elevation Gain: ${hike.elevationGain}`;
        document.getElementById('hikeStyle').textContent = `Style: ${hike.style}`;
        document.getElementById('hikeDifficulty').textContent = `Difficulty: ${hike.difficulty}`;

        applyDifficultyRating(hikeCard, hike);
    } else {
        hikeCard.innerHTML = "<h2>Hike not found.</h2>";
    }
} else if (hikeList) {
    // on the all-hikes page, create one card for every hike in the hikes object
    for (const id in hikes) {
        const currentHike = hikes[id];
        const card = document.createElement('div');
        card.className = 'hike';

        const title = document.createElement('strong');
        const link = document.createElement('a');
        link.href = `hike-details.html?id=${encodeURIComponent(id)}`;
        link.textContent = currentHike.name;
        title.appendChild(link);
        card.appendChild(title);

        const length = document.createElement('p');
        length.className = 'length';
        length.textContent = `Length: ${currentHike.length}`;
        card.appendChild(length);

        const elevation = document.createElement('p');
        elevation.className = 'elevationGain';
        elevation.textContent = `Elevation Gain: ${currentHike.elevationGain}`;
        card.appendChild(elevation);

        const style = document.createElement('p');
        style.textContent = `Style: ${currentHike.style}`;
        card.appendChild(style);

        const difficulty = document.createElement('p');
        difficulty.className = 'difficulty';
        difficulty.textContent = 'Difficulty:';
        card.appendChild(difficulty);

        // keep a hike's photo in the data so its card can display it too.
        if (currentHike.image) {
            const image = document.createElement('img');
            image.src = currentHike.image;
            image.alt = `An image of ${currentHike.name}.`;
            card.appendChild(image);
        }

        hikeList.appendChild(card);
        applyDifficultyRating(card, currentHike);
    }
}