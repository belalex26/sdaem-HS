import { Link } from 'react-router-dom';

import MainLayout from '../../components/main-layout/main-layout';

function NotPage() {
  return (
    <>
      <MainLayout>
        <section className="not-page">
          <div className="not-page__wrap">
            <h1 className="not-page__title">Ошибка 404</h1>
            <p className="not-page__text">Возможно, у вас опечатка в адресе страницы, или её просто не существует</p>
            <Link className="not-page__link" to="/">Вернуться на главную</Link>
          </div>
        </section>
      </ MainLayout>
    </>

  );
}

export default NotPage;