import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

function NotPage() {
  return (
    <>
      <Header />
      <div className="not-page">
        <h1 className="not-page__title">Ошибка 404</h1>
        <p className="not-page__text">Возможно, у вас опечатка в адресе страницы, или её просто не существует</p>
        <a className="not-page__link" href="/">Вернуться на главную</a>
      </div>
      <Footer />
    </>

  );
}

export default NotPage;