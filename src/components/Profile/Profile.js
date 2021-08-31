import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useFormWithValidation } from '../../utils/FormValidation';
import Navigation from '../Navigation/Navigation';
import '../Profile/Profile.css';


function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const validation = useFormWithValidation();
  const {name, email} = validation.values;

  function handleSubmit (event) {
    event.preventDefault();
    props.onEditUserInfo({name, email});
  }

  useEffect(() => {
    if (currentUser) {
        validation.setValues({ name: currentUser.name, email: currentUser.email });
    }
  }, [currentUser]);
  
  return (
    <section className="profile">
      <Navigation />
      <div className="profile__wrap">
        <h2 className="profile_title">Привет, {currentUser.name}!</h2>
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__form-group">
            <input 
              className="profile__input profile__input_name" 
              id="name" 
              value={validation.values.name || ''}
              onChange={event => validation.handleChange(event)}
              type="text"
              maxLength="40"
              minLength="2"
              required>
            </input>
            <label className="profile__label" for="name">Имя</label>
            <span id="name-error" className={`profile__input-error ${!validation.isInputsValid.name && 'profile__input-error_active'}`}>
              {validation.errors.name}
            </span>
          </div>
          <div className="profile__form-group">
            <input 
              className="profile__input profile__input_email" 
              id="email" 
              value={validation.values.email || ''}
              onChange={event => validation.handleChange(event)}
              type="email"
              required>
            </input>
            <label className="profile__label" for="email">E-mail</label>
            <span id="email-error"className={`profile__input-error ${!validation.isInputsValid.email && 'profile__input-error_active'}`}>
              {validation.errors.email}
            </span>
          </div>
          <p className="profile__submit-error">{props.feedbackMessage}</p>
          <button type="submit" className="profile__button" disabled={!validation.isFormValid}>Редактировать</button>
        </form>
        <Link className="profile__link" onClick={props.onSignOut} to="/">Выйти из аккаунта</Link>
      </div>
    </section>
  )
}

export default Profile;