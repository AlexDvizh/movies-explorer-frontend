import React from 'react';
import '../Techs/Techs.css';


function Techs() {
  
  return (
    <section className="techs">
      <div className="techs__wrap">
        <h2 className="section__heading">Технологии</h2>
        <div className="techs__text">
          <h3 className="techs__title">7 технологий</h3>
          <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>
        <ul className="techs__list">
          <li className="techs__point">HTML</li>
          <li className="techs__point">CSS</li>
          <li className="techs__point">JS</li>
          <li className="techs__point">React</li>
          <li className="techs__point">Git</li>
          <li className="techs__point">Express.js</li>
          <li className="techs__point">mongoDB</li>
        </ul>
      </div>
    </section>
  )
}

export default Techs;