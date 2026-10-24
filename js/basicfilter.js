function FilterHikes(filterClass){
document.querySelectorAll(`.hike:not(${filterClass}, .Ignore)`).forEach(i => {
if (filterClass == 'All' || i.classList.contains(filterClass)) {
      i.classList.remove('hidden');
    } else {
      i.classList.add('hidden');
    }
    });
}

