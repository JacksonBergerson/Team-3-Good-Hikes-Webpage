// sprint 2

// all trails data storage for all hikes
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
        surface: {paved: 95, steps: 5},
        image: "https://www.alltrails.com/api/alltrails/trails/10023187/profile_photo?size=larger_wide"
    },
    "pinnacle-peak": {
        name: "Pinnacle Peak",
        length: "3 miles",
        elevationGain: "1,581ft",
        style: "Out and Back",
        difficulty: "Strenuous",
        surface: {natural: 87, unknown: 13},
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTI3NzI4NzkyLzg3YTY0ZDAyNTE3NmNhYjEyOGI2MWFkYWMzNTgwZGMxLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjIwNDgiLCJoZWlnaHQiOiIyMDQ4IiwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19"
    },
    "naches-peak-loop": {
        name: "Naches Peak Loop",
        length: "3.5 miles",
        elevationGain: "643ft",
        style: "Loop",
        difficulty: "Moderate",
        surface: {natural: 97, unknown: 3},
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTMxNjcwMzk4LzdlNDkwZmY1MjY3YTUyZDIyNTJiOTNlMzA3Y2Q2MjMxLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjIwNDgiLCJoZWlnaHQiOiIyMDQ4IiwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19"
    },
    "fremont-lookout": {
        name: "Fremont Lookout",
        length: "5.8 miles",
        elevationGain: "1,108ft",
        style: "Out and Back",
        difficulty: "Moderate",
        surface: {natural: 93, unknown: 4, gravel: 3},
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNzg4MjcwMjUvNTM1N2ZjNGNmZjcwNjQ3YTc1NTUyMGRiYzkxZTE0ZDguanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoiMjA0OCIsImhlaWdodCI6IjIwNDgiLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0="
    },
    "burrough-mountain": {
        name: "Burrough Mountain",
        length: "8.9 miles",
        elevationGain: "2,467ft",
        style: "Out and Back",
        difficulty: "Hard",
        surface: {natural: 98, gravel: 2},
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMzAwMjY1ODUvYzk4NTg3YzIzMDg2OTlkMDVjNWM5YmY2ZDBhOGUzMzAuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoiMjA0OCIsImhlaWdodCI6IjIwNDgiLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0="
    },
    "high-rock-lookout": {
        name: "High Rock Lookout",
        length: "3.4 miles",
        elevationGain: "1,348ft",
        style: "Out and Back",
        difficulty: "Hard",
        terrain: "moderate",
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNjEzNTE4MTkvODY5ZDdhYjYyMWQ5MjA0Mzc5N2IzMDVjMjMwNWRkNmYuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoiMjA0OCIsImhlaWdodCI6IjIwNDgiLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0="
    },
    "narada-falls": {
        name: "Narada Falls",
        length: "0.2 miles",
        elevationGain: "78ft",
        style: "Out and Back",
        difficulty: "Easy",
        surface: {natural: 100},
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNjM1NTQxOTkvNjlkNjhiMzQ2NDA2NmJmMDI2MmRlMDU0ZWRhNDRhMmEuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoiMjA0OCIsImhlaWdodCI6IjIwNDgiLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0="
    },
    "nisqually-vista-trail": {
        name: "Nisqually Vista Trail",
        length: "1.1 miles",
        elevationGain: "180ft",
        style: "Loop",
        difficulty: "Easy",
        surface: {paved: 99, steps: 1},
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTA0Nzc2MDY0L2JlNmUwZDNlMzk2MDA3NWVkOGNkZDY2ZmZkZTIxY2JkLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjIwNDgiLCJoZWlnaHQiOiIyMDQ4IiwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19"
    }
};

// read the "id" value from the browser's URL (e.g. ?id=skyline-loop)
const urlParams = new URLSearchParams(window.location.search);
const hikeId = urlParams.get('id');

// show one hike on the details page.
function showHikeDetails() {
    const hike = hikes[hikeId];
    const hikeCard = document.getElementById('hike-card');

    if (!hike) {
        hikeCard.innerHTML = '<h2>Hike not found.</h2>';
        return;
    }

    document.title = hike.name;
    document.getElementById('hikeName').textContent = hike.name;
    document.getElementById('hikeLength').textContent = `Length: ${hike.length}`;
    document.getElementById('hikeElevation').textContent = `Elevation Gain: ${hike.elevationGain}`;
    document.getElementById('hikeStyle').textContent = `Style: ${hike.style}`;
    document.getElementById('hikeDifficulty').textContent = `Difficulty: ${hike.difficulty}`;

    applyDifficultyRating(hikeCard, hike);
}

// make one hike card for the all-hikes page.
function makeHikeCard(hikeId, hike) {
    const card = document.createElement('div');
    card.className = 'hike';

    const title = document.createElement('strong');
    const link = document.createElement('a');
    link.href = `hike-details.html?id=${encodeURIComponent(hikeId)}`;
    link.textContent = hike.name;
    title.appendChild(link);
    card.appendChild(title);

    const length = document.createElement('p');
    length.className = 'length';
    length.textContent = `Length: ${hike.length}`;
    card.appendChild(length);

    const elevation = document.createElement('p');
    elevation.className = 'elevationGain';
    elevation.textContent = `Elevation Gain: ${hike.elevationGain}`;
    card.appendChild(elevation);

    const style = document.createElement('p');
    style.textContent = `Style: ${hike.style}`;
    card.appendChild(style);

    const difficulty = document.createElement('p');
    difficulty.className = 'difficulty';
    card.appendChild(difficulty);

    if (hike.image) {
        const image = document.createElement('img');
        image.src = hike.image;
        image.alt = 'An image of ' + hike.name + '.';
        image.width = 300;
        card.appendChild(image);
    }

    applyDifficultyRating(card, hike);
    return card;
}

// show all hikes on the list page
function showAllHikes() {
    const hikeList = document.querySelector('.hike-list');
    const hikeIds = Object.keys(hikes);

    // create every card first so they can be sorted by their calculated ratings
    const cards = [];
    for (let i = 0; i < hikeIds.length; i++) {
        const hikeId = hikeIds[i];
        cards.push(makeHikeCard(hikeId, hikes[hikeId]));
    }

    // a negative result puts the first card earlier; a positive result puts it later.
    cards.sort(function (firstCard, secondCard) {
        const firstRating = Number(firstCard.getAttribute('data-difficulty-rating'));
        const secondRating = Number(secondCard.getAttribute('data-difficulty-rating'));
        return firstRating - secondRating;
    });

    for (let i = 0; i < cards.length; i++) {
        hikeList.appendChild(cards[i]);
    }
}

// choose what to show based on which page elements are on this page.
const hikeCard = document.getElementById('hike-card');
const hikeList = document.querySelector('.hike-list');

if (hikeCard) {
    showHikeDetails();
} else if (hikeList) {
    showAllHikes();
}