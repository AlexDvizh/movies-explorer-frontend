export const MOVIES_URL = 'https://api.nomoreparties.co';

const checkResponce = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`) 
}

export const getMovies = () => {
  return fetch(`${MOVIES_URL}/beatfilm-movies`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(checkResponce)
}

