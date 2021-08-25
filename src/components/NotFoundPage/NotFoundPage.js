import React from 'react';
import { Link } from 'react-router-dom';
import '../NotFoundPage/NotFoundPage.css';


function NotFoundPage() {
  
  return (
    <section className="not-found-page">
      <h1 className="not-found-page__title">404</h1>
      <h2 className="not-found-page__subtitle">Страница не найдена</h2>
      <Link className="not-found-page__link" to="/">Назад</Link>
    </section>
  )
}

export default NotFoundPage;