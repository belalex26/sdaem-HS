import Logo from "../logo/logo";

function Header() {
    return (
        <header>
            <div className="container">
                <div className='header__row'>
                    <nav className="header__menu">
                        <ul className="header__menu-list">
                            <li className="header__menu-item">
                                <a className="header__menu-link" href="#">
                                    Главная
                                </a>
                            </li>
                            <li className="header__menu-item">
                                <a className="header__menu-link" href="#">
                                    Новости
                                </a>
                            </li>
                            <li className="header__menu-item">
                                <a className="header__menu-link" href="#">
                                    Размещения и тарифы
                                </a>
                            </li>
                            <li className="header__menu-item">
                                <a className="header__menu-link" href="#">
                                    Объявления на карте
                                </a>
                            </li>
                            <li className="header__menu-item">
                                <a className="header__menu-link" href="#">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='header__row'>
                    <Logo />
                    <ul className='header__catalog'>
                        <li className='header__catalog-item'>
                            <a className='header__catalog-item-link' href="#">Квартиры на сутки</a>
                        </li>
                        <li className='header__catalog-item'>
                            <a className='header__catalog-item-link' href="#">Коттеджи и усадьбы</a>
                        </li>
                        <li className='header__catalog-item'>
                            <a className='header__catalog-item-link' href="#">Бани и сауны</a>
                        </li>
                        <li className='header__catalog-item'>
                            <a className='header__catalog-item-link' href="#">Авто на прокат</a>
                        </li>
                    </ul>
                    <a className="header__add-btn" href="#">Разместить объявление</a>
                </div>
            </div>
        </header>

    );
  }
  
  export default Header;