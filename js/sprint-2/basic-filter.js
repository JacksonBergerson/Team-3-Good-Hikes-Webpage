// sprint 2

function filterHikes(minRating = 1, maxRating = 10) {
    document.querySelectorAll('.hike').forEach((hike) => {
        if (hike.classList.contains('Ignore')) return;

        // Read the rating saved on this card and turn it into a number.
        const rating = Number(hike.getAttribute('data-difficulty-rating'));
        const matchesFilter = rating >= minRating && rating <= maxRating;
        hike.classList.toggle('hidden', !matchesFilter);
    });
}
