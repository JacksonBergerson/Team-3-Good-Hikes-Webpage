// sprint 4
const filterCondition = [0];
const counter = [0];



function checkStatus1(checkbox) {
  if (checkbox.checked) {
    filterCondition.push(1);
    filterCondition.push(2);
    filterHikes4(filterCondition);
  } else if (!(checkbox.checked)){
    filterCondition.splice(filterCondition.indexOf(1), 1);
    filterCondition.splice(filterCondition.indexOf(2), 1);
        filterHikes4(filterCondition);
  }
}
function checkStatus3(checkbox) {
  if (checkbox.checked) {
    filterCondition.push(3);
    filterCondition.push(4);
    filterHikes4(filterCondition);
  } else if (!(checkbox.checked)){
    filterCondition.splice(filterCondition.indexOf(3), 1);
    filterCondition.splice(filterCondition.indexOf(4), 1);
        filterHikes4(filterCondition);
  }
}
function checkStatus5(checkbox) {
  if (checkbox.checked) {
    filterCondition.push(5);
    filterCondition.push(6);
    filterHikes4(filterCondition);
  } else if (!(checkbox.checked)){
    filterCondition.splice(filterCondition.indexOf(5), 1);
    filterCondition.splice(filterCondition.indexOf(6), 1);
        filterHikes4(filterCondition);
  }
}
function checkStatus7(checkbox) {
  if (checkbox.checked) {
    filterCondition.push(7);
    filterCondition.push(8);
    filterHikes4(filterCondition);
  } else if (!(checkbox.checked)){
    filterCondition.splice(filterCondition.indexOf(7), 1);
    filterCondition.splice(filterCondition.indexOf(8), 1);
        filterHikes4(filterCondition);
  }
}
function checkStatus9(checkbox) {
  if (checkbox.checked) {
    filterCondition.push(9);
    filterCondition.push(10);
    filterHikes4(filterCondition);
  } else if (!(checkbox.checked)){
    filterCondition.splice(filterCondition.indexOf(9), 1);
    filterCondition.splice(filterCondition.indexOf(10), 1);
        filterHikes4(filterCondition);
  }
}


function filterHikes(minRating = 1, maxRating = 10) {
    document.querySelectorAll('.hike').forEach((hike) => {
        if (hike.classList.contains('Ignore')) return;

        // Read the rating saved on this card and turn it into a number.
        const rating = Number(hike.getAttribute('data-difficulty-rating'));
        const matchesFilter = rating >= minRating && rating <= maxRating;
        hike.classList.toggle('hidden', !matchesFilter);
    });
}

function filterHikes2() {
    document.querySelectorAll('.hike').forEach((hike) => {
        if (hike.classList.contains('Ignore')) return;

        // Read the rating saved on this card and turn it into a number.
        const rating = Number(hike.getAttribute('data-difficulty-rating'));
        const matchesFilter = determineRating(rating, filterCondition);
        hike.classList.toggle('hidden', !matchesFilter);


                console.log(filterCondition);


        if(filterCondition.length == 1){
          hike.classList.remove('hidden');
        }
    });
}


async function filterHikes4() {
    // Create a clean URL parameter builder (automatically encodes spaces and commas)
    const queryParams = new URLSearchParams();

    // --- ROW 1: DIFFICULTY CHECKBOXES ---
    // Index 0 in filterCondition is just a placeholder, so length > 1 means at least one rating is checked
    if (filterCondition.length > 1) {
      // Grab all selected rating numbers after index 0 and join them with commas (e.g., "3,4,7,8")
      const selectedRatings = filterCondition.slice(1).join(',');
      queryParams.append('difficulty_ratings', selectedRatings);
    }

    // --- ROW 2: PARK NAME & HIKE STYLE DROPDOWNS ---
    // Read the current selected option from each dropdown (optional chaining '?.' safely avoids errors if missing)
    const selectedParkName  = document.getElementById('park-name-filter')?.value;
    const selectedHikeStyle = document.getElementById('hike-style-filter')?.value;

    // --- ROW 3: MIN & MAX DISTANCE AND ELEVATION TEXTBOXES ---
    // Read the typed numbers from all four min/max inputs
    const minHikeDistance   = document.getElementById('min-hike-distance-filter')?.value;
    const maxHikeDistance   = document.getElementById('max-hike-distance-filter')?.value;
    const minElevationGain  = document.getElementById('min-elevation-gain-filter')?.value;
    const maxElevationGain  = document.getElementById('max-elevation-gain-filter')?.value;

    // --- ROW 4: TERRAIN KEYWORD SEARCH ---
    // Read any keyword typed into the terrain search box (e.g., "gravel", "paved", "dirt")
    const terrainTypeKeyword = document.getElementById('terrain-type-filter')?.value;

    // Attach each filter to the URL ONLY if the user actually selected or typed a value
    if (selectedParkName)   queryParams.append('park_name', selectedParkName);
    if (selectedHikeStyle)  queryParams.append('hike_style', selectedHikeStyle);
    if (minHikeDistance)    queryParams.append('min_hike_distance', minHikeDistance);
    if (maxHikeDistance)    queryParams.append('max_hike_distance', maxHikeDistance);
    if (minElevationGain)   queryParams.append('min_elevation_gain', minElevationGain);
    if (maxElevationGain)   queryParams.append('max_elevation_gain', maxElevationGain);
    if (terrainTypeKeyword) queryParams.append('terrain_type', terrainTypeKeyword);

    // Send the active filters to get_data.php (if queryParams is empty, get_data.php returns all hikes)
    const response = await fetch(`get_data.php?${queryParams.toString()}`);

    // Convert the JSON text returned by PHP into a JavaScript array of matching hike objects
    const matchingHikes = await response.json();

    console.log('Filtered hikes from DB:', matchingHikes);
    console.log('Active filterCondition:', filterCondition);

    // Rebuild, sort, and display the hike cards on the page using the returned database rows
    renderHikes(matchingHikes);
}

function resetFilters() {
    // 1. Reset the difficulty rating array back to its initial state (keeps index 0, removes all selected ratings)
    filterCondition.length = 1;

    // 2. Find every difficulty checkbox inside .filterButtonDiv and uncheck it visually on the page
    document.querySelectorAll('.filterButtonDiv input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false;
    });

    // 3. List the HTML IDs of all dropdowns and text/number inputs across Rows 2, 3, and 4
    const inputIds = [
      'park-name-filter',
      'hike-style-filter',
      'min-hike-distance-filter',
      'max-hike-distance-filter',
      'min-elevation-gain-filter',
      'max-elevation-gain-filter',
      'terrain-type-filter'
    ];

    // Loop through each input ID and clear its selected option or typed text back to empty ('')
    inputIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.value = '';
      }
    });

    // 4. Re-run filterHikes4() now that all filters are empty, which fetches and displays every hike again
    filterHikes4();
}



/*
async function filterHikes3() {
  // Get the comma-separated numbers (e.g., "3,4,7,8")
  const ratings = filterCondition.slice(1).join(',');

  // Send those ratings to get_data.php and wait for the database results
  const response = await fetch(`get_data.php?ratings=${encodeURIComponent(ratings)}`);
  const data = await response.json();

  console.log('Filtered hikes from DB:', data);
  console.log(filterCondition);

  // Show or hide each hike card on the page
  document.querySelectorAll('.hike').forEach((hike) => {
    if (hike.classList.contains('Ignore')) return;

    // Show all hikes if no filter is active
    if (filterCondition.length == 1) {
      hike.classList.remove('hidden');
      return;
    }

    // Read the rating saved on this card and toggle visibility
    const rating = Number(hike.getAttribute('data-difficulty-rating'));
    const matchesFilter = determineRating(rating, filterCondition);
    hike.classList.toggle('hidden', !matchesFilter);
  });
}
*/


/*
function filterHikes3() {

    // The reference to the php file.
    const response = await fetch('get_data.php');
    const data = await response.json();

    // Use 'data'.
    console.log(data);
    
   
  
  
  
  //Get contents of the array (ex: 3,4,7,8) without ()s but with commas and build the SQL query.
const HikeQuery ="SELECT * FROM hikes WHERE RatingNumber IN (" + filterCondition.slice(1, filterCondition.length)+")";
loadDatabaseData();
//Run query HikeQuery. This involves making a connection to the database.


//Put query results into an array.
//Loop through the array as in function filterHikes2.


  document.querySelectorAll('.hike').forEach((hike) => {
        if (hike.classList.contains('Ignore')) return;
console.log(HikeQuery);


 // 


        if(filterCondition.length == 1){
          hike.classList.remove('hidden');
        }
    });
}
*/


function determineRating(rating, filterCondition){
  if (!(filterCondition.includes(rating))){
    return false;
  } else{
    return true;
  }
}


