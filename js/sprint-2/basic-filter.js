// sprint 2
const filterCondition = [0];
const counter = [0];



function checkStatus1(checkbox) {
  if (checkbox.checked) {
    filterCondition.push(1);
    filterCondition.push(2);
    filterHikes2(filterCondition);
  } else if (!(checkbox.checked)){
    filterCondition.splice(filterCondition.indexOf(1), 1);
    filterCondition.splice(filterCondition.indexOf(2), 1);
        filterHikes2(filterCondition);
  }
}
function checkStatus3(checkbox) {
  if (checkbox.checked) {
    filterCondition.push(3);
    filterCondition.push(4);
    filterHikes2(filterCondition);
  } else if (!(checkbox.checked)){
    filterCondition.splice(filterCondition.indexOf(3), 1);
    filterCondition.splice(filterCondition.indexOf(4), 1);
        filterHikes2(filterCondition);
  }
}
function checkStatus5(checkbox) {
  if (checkbox.checked) {
    filterCondition.push(5);
    filterCondition.push(6);
    filterHikes2(filterCondition);
  } else if (!(checkbox.checked)){
    filterCondition.splice(filterCondition.indexOf(5), 1);
    filterCondition.splice(filterCondition.indexOf(6), 1);
        filterHikes2(filterCondition);
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


        if(filterCondition == [0]){
        if(hike.classList.contains('hidden')){
          hike.classList.toggle('hidden');
        }}
    });
}

function determineRating(rating, filterCondition){
  if (!(filterCondition.includes(rating))){
    return false;
  } else{
    return true;
  }
}