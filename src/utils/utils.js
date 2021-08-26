export const filterCards = (movies, searchText, isCheckboxActive) => {
  if (isCheckboxActive) {
    const filteredByCheckboxMovies = filterCardsByCheckbox(movies);
    return filterCardsByText(filteredByCheckboxMovies, searchText)
  } else {
    return filterCardsByText(movies, searchText)
  }
};

export const filterCardsByText = (movies, searchText) => {
    return movies.filter(item => 
      (item.nameRU !== null && item.nameRU.toLowerCase().includes(searchText.toLowerCase())) ||
      (item.nameEN !== null && item.nameEN.toLowerCase().includes(searchText.toLowerCase()))  )
};

export const filterCardsByCheckbox = (movies) => {
    return movies.filter(item => item.duration <= 40)
};