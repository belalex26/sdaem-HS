import Logo from "../../components/logo/logo";
import PayList from "../pay-list/pay-list";
import SocialBar from "../social-bar/social-bar";

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container">
            <div className="footer__info">
                <Logo />
                <p className="footer__info-logo">СДАЁМ БАЙ</p>
                <p className="footer__info-text">ИП Шушкевич Андрей Викторович</p>
                <p className="footer__info-text">УНП 192602485 Минским горисполкомом 10.02.2016</p>
                <p className="footer__info-text">220068, РБ, г. Минск, ул. Осипенко, 21, кв.23 </p>
                <a className="footer__info-text-link" href="+375296214833">+375 29 621 48 33, </a>
                <a className="footer__info-text-link" href="sdaem@sdaem.by">sdaem@sdaem.by</a>
                <p className="footer__info-text">Режим работы: 08:00-22:00</p>
            </div>
            <ul className="footer__catalog">
              <li className="footer__catalog-item">
                <a className="footer__catalog-item-link" href="#">Коттеджи и усадьбы</a>
              </li>
              <li className="footer__catalog-item">
                <a className="footer__catalog-item-link" href="#">Бани и сауны</a>
              </li>
              <li className="footer__catalog-item">
                <a className="footer__catalog-item-link" href="#">Авто на прокат</a>
              </li>
            </ul>
            <div className="footer__fast-filter">
              <p className="footer__fast-filter-title">
                Квартиры
              </p>
              <ul className="footer__fast-filter-list">
                <li className="footer__fast-filter-item">
                  <a className="footer__fast-filter-item-link" href="#">
                    Квартиры в Минске
                  </a>
                </li>
                <li className="footer__fast-filter-item">
                  <a className="footer__fast-filter-item-link" href="#">
                    Квартиры в Витебске
                  </a>
                </li>
                <li className="footer__fast-filter-item">
                  <a className="footer__fast-filter-item-link" href="#">
                    Квартиры в Гомеле
                  </a>
                </li>
                <li className="footer__fast-filter-item">
                  <a className="footer__fast-filter-item-link" href="#">
                    Квартиры в Гродно
                  </a>
                </li>
                <li className="footer__fast-filter-item">
                  <a className="footer__fast-filter-item-link" href="#">
                    Квартиры в Бресте
                  </a>
                </li>
                <li className="footer__fast-filter-item">
                  <a className="footer__fast-filter-item-link" href="#">
                    Квартиры в Могилево
                  </a>
                </li>
              </ul>
            </div>
            <ul className="footer__nav-bar">
              <li className="footer__nav-bar-item">
                <a className="footer__nav-bar-item-link" href="#">
                  Новости
                </a>
              </li>
              <li className="footer__nav-bar-item">
                <a className="footer__nav-bar-item-link" href="#">
                  Размещение и тарифы 
                </a>
              </li>
              <li className="footer__nav-bar-item">
                <a className="footer__nav-bar-item-link" href="#">
                  Объявления на карте
                </a>
              </li>
              <li className="footer__nav-bar-item">
                <a className="footer__nav-bar-item-link" href="#">
                  Контакты
                </a>
              </li>
            </ul>
            <div className="footer__social-bar">
              <p className="footer__social-bar-title">Мы в соцсетях</p>
              <SocialBar />
            </div>
            <div className="footer__pay-info">
              <PayList />
            </div>
        </div>
    </footer>

  );
}

export default Footer