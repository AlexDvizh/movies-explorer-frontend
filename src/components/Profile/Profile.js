import React from 'react';
import Navigation from '../Navigation/Navigation';
import '../Profile/Profile.css';


function Profile() {
  
  return (
    <section className="profile">
      <Navigation />
      <div className="profile__wrap">
        <h2 className="profile_title">Привет, Александр!</h2>
        <form className="profile__form">
          <div className="profile__form-group">
            <input className="profile__input profile__input_name" id="name" placeholder="Александр"></input>
            <label className="profile__label" for="name">Имя</label>
          </div>
          <div className="profile__form-group">
            <input className="profile__input profile__input_email" id="email" placeholder="123@123.ru"></input>
            <label className="profile__label" for="email">E-mail</label>
          </div>
          <button type="submit" className="profile__button">Редактировать</button>
        </form>
        <a className="profile__link" href="/">Выйти из аккаунта</a>
      </div>
    </section>
  )
}

export default Profile;