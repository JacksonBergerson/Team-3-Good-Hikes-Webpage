// sprint 4
const filterCondition = [0];
const counter = [0];



function checkStatus1(checkbox) {
  if (checkbox.checked) {
    filterCondition.push(1);
    filterCondition.push(2);
    filterHikes3(filterCondition);
  } else if (!(checkbox.checked)){
    filterCondition.splice(filterCondition.indexOf(1), 1);
    filterCondition.splice(filterCondition.indexOf(2), 1);
        filterHikes3(filterCondition);
  }
}
function checkStatus3(checkbox) {
  if (checkbox.checked) {
    filterCondition.push(3);
    filterCondition.push(4);
    filterHikes3(filterCondition);
  } else if (!(checkbox.checked)){
    filterCondition.splice(filterCondition.indexOf(3), 1);
    filterCondition.splice(filterCondition.indexOf(4), 1);
        filterHikes3(filterCondition);
  }
}
function checkStatus5(checkbox) {
  if (checkbox.checked) {
    filterCondition.push(5);
    filterCondition.push(6);
    filterHikes3(filterCondition);
  } else if (!(checkbox.checked)){
    filterCondition.splice(filterCondition.indexOf(5), 1);
    filterCondition.splice(filterCondition.indexOf(6), 1);
        filterHikes3(filterCondition);
  }
}
function checkStatus7(checkbox) {
  if (checkbox.checked) {
    filterCondition.push(7);
    filterCondition.push(8);
    filterHikes2(filterCondition);
  } else if (!(checkbox.checked)){
    filterCondition.splice(filterCondition.indexOf(7), 1);
    filterCondition.splice(filterCondition.indexOf(8), 1);
        filterHikes2(filterCondition);
  }
}
function checkStatus9(checkbox) {
  if (checkbox.checked) {
    filterCondition.push(9);
    filterCondition.push(10);
    filterHikes2(filterCondition);
  } else if (!(checkbox.checked)){
    filterCondition.splice(filterCondition.indexOf(9), 1);
    filterCondition.splice(filterCondition.indexOf(10), 1);
        filterHikes2(filterCondition);
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










async function loadDatabaseData() {
  try {
    // Call the PHP file sitting on cPanel
    const response = await fetch('get_data.php');
    const data = await response.json();

    if (data.error) {
      console.error('Server Error:', data.error);
      return;
    }

    // Use database rows here
    console.log('Data from phpMyAdmin:', data);

  } catch (err) {
    console.error('Fetch failed:', err);
  }
}


