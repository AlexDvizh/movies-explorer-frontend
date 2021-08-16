import React from 'react';
import '../AboutMe/AboutMe.css';
import photo from '../../../images/avatar.jpg';


function AboutMe() {
  
  return (
    <section className="about-me">
      <h2 className="section__heading">Студент</h2>
      <div className="content-block">
        <div className="content-block__info">
          <h3 className="content-block__name">Александр</h3>
          <h4 className="content-block__proffesion">Фронтенд-разработчик, 29 лет</h4>
          <p className="content-block__about">Я родился и живу в Москве, закончил факультет экономики МФЮА. У меня есть жена 
  и кот. Люблю путешествовать, увлекаюсь спортом. 9 лет жизни посвятил спортивной гимнастике. С 2017 года работаю в компании «МЕГОГО». С августа 2020 начал кодить. После того, как прошёл курс по веб-разработке, начал активные поиски постоянной работы в сфере IT.</p>
          <ul className="contacts">
            <li className="contacts__item">
              <a className="contacts__link" href="https://t.me/alex_dvizh" target="_blank" rel="noreferrer">Telegram</a>
            </li>
            <li className="contacts__item">
              <a className="contacts__link" href="https://github.com/AlexDvizh" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
        <img className="content-block__img" src={photo} alt="Фото разработчика"></img>
      </div>
    </section>
  )
}

export default AboutMe;