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
  // Create a clean URL parameter builder
  const queryParams = new URLSearchParams();

  // 1. DIFFICULTY RATING: Attach comma-separated ratings if any are selected
  if (filterCondition.length > 1) {
    const selectedRatings = filterCondition.slice(1).join(',');
    queryParams.append('difficulty_ratings', selectedRatings);
  }

  // 2. OPTIONAL EXTRA FILTERS (Uncomment and match to your HTML input IDs as you build them):
  // const selectedParkName    = document.getElementById('park-name-filter')?.value;
  // const maxElevationGain    = document.getElementById('elevation-gain-filter')?.value;
  // const maxHikeDistance     = document.getElementById('hike-distance-filter')?.value;
  // const selectedHikeStyle   = document.getElementById('hike-style-filter')?.value;
  // const terrainTypeKeyword  = document.getElementById('terrain-type-filter')?.value;

  // if (selectedParkName)   queryParams.append('park_name', selectedParkName);
  // if (maxElevationGain)   queryParams.append('max_elevation_gain', maxElevationGain);
  // if (maxHikeDistance)    queryParams.append('max_hike_distance', maxHikeDistance);
  // if (selectedHikeStyle)  queryParams.append('hike_style', selectedHikeStyle);
  // if (terrainTypeKeyword) queryParams.append('terrain_type', terrainTypeKeyword);

  // Send the active filters to get_data.php (if queryParams is empty, it returns all hikes)
  const response = await fetch(`get_data.php?${queryParams.toString()}`);
  const matchingHikes = await response.json();

  console.log('Filtered hikes from DB:', matchingHikes);
  console.log('Active filterCondition:', filterCondition);

  // Rebuild and sort the hike cards on the page using the returned database rows
  renderHikes(matchingHikes);
}

function resetFilters() {
  // 1. Reset the difficulty rating array back to its default state (keeps index 0)
  filterCondition.length = 1;

  // 2. Uncheck all difficulty checkboxes inside .filterButtonDiv
  document.querySelectorAll('.filterButtonDiv input[type="checkbox"]').forEach((checkbox) => {
    checkbox.checked = false;
  });

  // 3. Clear any extra filter inputs/dropdowns if they exist on the page
  const parkNameInput = document.getElementById('park-name-filter');
  const hikeDistanceInput = document.getElementById('hike-distance-filter');
  const elevationGainInput = document.getElementById('elevation-gain-filter');
  const hikeStyleInput = document.getElementById('hike-style-filter');
  const terrainTypeInput = document.getElementById('terrain-type-filter');

  if (parkNameInput) parkNameInput.value = '';
  if (hikeDistanceInput) hikeDistanceInput.value = '';
  if (elevationGainInput) elevationGainInput.value = '';
  if (hikeStyleInput) hikeStyleInput.value = '';
  if (terrainTypeInput) terrainTypeInput.value = '';

  // 4. Re-run filterHikes4() with empty filters to reload and display all hikes
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


