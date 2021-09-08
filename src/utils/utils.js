const NUM_OF_CARDS_1280_PX = 12;
const NUM_OF_CARDS_768_PX = 8;
const NUM_OF_CARDS_480_PX = 5;
const NUM_OF_ADDED_CARDS_1280_PX = 4;
const NUM_OF_ADDED_CARDS_768_PX = 2;
const NUM_OF_ADDED_CARDS_480_PX = 1;
const DURATION_SHORT_MOVIES = 40;


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
    return movies.filter(item => item.duration <= DURATION_SHORT_MOVIES)
};

export const showCardsParameters = (pageWidth) => {
  if (pageWidth >= 1280) {
      return {
        numOfInitialCards: NUM_OF_CARDS_1280_PX,
        maxNumOfAddedCards: NUM_OF_ADDED_CARDS_1280_PX
      }
    } else if (pageWidth >= 768) {
      return {
        numOfInitialCards: NUM_OF_CARDS_768_PX,
        maxNumOfAddedCards: NUM_OF_ADDED_CARDS_768_PX
      }
    } else {
      return {
        numOfInitialCards: NUM_OF_CARDS_480_PX,
        maxNumOfAddedCards: NUM_OF_ADDED_CARDS_480_PX
      }
    }
};