import React from 'react';
import '../AboutProject/AboutProject.css';


function AboutProject() {
  
  return (
    <section className="about-project">
      <h2 className="section__heading">О проекте</h2>
      <ul className="content__wrap">
        <li>
          <h3 className="content__title">Дипломный проект включал 5 этапов</h3>
          <p className="content__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li>
          <h3 className="content__title">На выполнение диплома ушло 5 недель</h3>
          <p className="content__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <ul className="table">
        <li className="table__content">
          <div className="table__title table__title_green">1 неделя</div>
          <p className="table__subtitle">Back-end</p>
        </li>
        <li className="table__content">
          <div className="table__title table__title_grey">4 недели</div>
          <p className="table__subtitle">Front-end</p>
        </li>
      </ul>
    </section>
  )
}

export default AboutProject;