const URL = 'https://api.nomoreparties.co/beatfilm-movies';

const checkResponce = (res) => {
  if (res.ok) {
    return res.json;
  }
  return Promise.reject(`Ошибка: ${res.status}`) 
}

export const getMovies = () => {
  return fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(checkResponce)
}

