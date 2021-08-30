export const MAIN_URL = 'http://localhost:3000';

const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';

const checkResponse = (res) => {
    if(res.ok) {
        return res.json()
    } 
    return Promise.reject(`Ошибка: ${res.status}`) 
}

export const register = ({name, email, password}) => {
    return fetch(`${MAIN_URL}/signup`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, password})
    })
    .then((res) => {
        if(res.ok) {
            return res.json()
        } else if (res.status === 409) {
            return Promise.reject('Пользователь с таким email уже существует')
        }
        return Promise.reject('Что-то пошло не так! Попробуйте ещё раз :(')
    })
};

export const authorize = ({email, password}) => {
    return fetch(`${MAIN_URL}/signin`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then((res) => {
        if(res.ok) {
            return res.json()
        }
        return Promise.reject('Неправильный логин или пароль')
    })
};

export const getUserInfo = () => {
  return fetch(`${MAIN_URL}/users/me`, {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      }
  })
  .then(checkResponse)
};

export const setUserInfo = ({name, email}) => {
    return fetch(`${MAIN_URL}/users/me`, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        },
        body: JSON.stringify({name, email})
    })
    .then((res) => {
        if(res.ok) {
            return res.json()
        } else if (res.status === 409) {
            return Promise.reject('Пользователь с таким email уже существует')
        }
        return Promise.reject('Что-то пошло не так! Попробуйте ещё раз :(')
    })
};

export const getSavedMovies = () => {
    return fetch(`${MAIN_URL}/movies`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        }
    })
    .then(checkResponse)
};

export const saveMovie = (movie) => {
    return fetch(`${MAIN_URL}/movies`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        },
        body: JSON.stringify({
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: MOVIES_URL + movie.image.url,
            trailer: movie.trailerLink,
            thumbnail: MOVIES_URL + movie.image.formats.thumbnail.url,
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
        })

    })
    .then(checkResponse)
}

export const deleteSavedMovie = (movieId) => {
    return fetch(`${MAIN_URL}/movies/${movieId}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        }
    })
    .then(checkResponse)
};