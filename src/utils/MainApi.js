export const MAIN_URL = 'https://api.movies.alexdvizh.nomoredomains.club';

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
  return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      }
  })
  .then(checkResponse)
};