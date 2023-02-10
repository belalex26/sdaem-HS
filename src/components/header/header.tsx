import { Link } from 'react-router-dom';
import Logo from "../logo/logo";

function Header() {
    return (
        <header className="header">
            <div className='header__row'>
                <nav className="header__menu">
                    <ul className="header__menu-list">
                        <li className="header__menu-item">
                            <Link className="header__menu-link" to={"/main"}>
                                Главная
                            </Link>
                        </li>
                        <li className="header__menu-item">
                            <Link className="header__menu-link" to={"/news"}>
                                Новости
                            </Link>
                        </li>
                        <li className="header__menu-item">
                            <Link className="header__menu-link" to={"/tarif"}>
                                Размещения и тарифы
                            </Link>
                        </li>
                        <li className="header__menu-item">
                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.33796 1.74419C6.6054 0.627907 5.3961 0 4.03564 0C2.6868 0 1.4775 0.627907 0.721683 1.74419C-0.0341305 2.83721 -0.208549 4.23256 0.256567 5.45349C0.384474 5.77907 0.582148 6.11628 0.837962 6.4186L3.77982 9.88372C3.84959 9.95349 3.91936 10 4.02401 10C4.12866 10 4.19843 9.95349 4.2682 9.88372L7.22168 6.4186C7.4775 6.11628 7.6868 5.7907 7.80308 5.45349C8.2682 4.23256 8.09378 2.83721 7.33796 1.74419ZM4.03564 5.86047C3.03564 5.86047 2.21006 5.03488 2.21006 4.03488C2.21006 3.03488 3.03564 2.2093 4.03564 2.2093C5.03564 2.2093 5.86122 3.03488 5.86122 4.03488C5.86122 5.03488 5.04727 5.86047 4.03564 5.86047Z" fill="#8291A3"/>
                            </svg>
                            <Link className="header__menu-link" to={"/cart"}>
                                Объявления на карте
                            </Link>

                        </li>
                        <li className="header__menu-item">
                            <Link className="header__menu-link" to={"/contacts"}>
                                Контакты
                            </Link>
                        </li>
                    </ul>
                    <div className="header__menu-bar">
                        <Link className="header__menu-like" to={"/hearts"}>Закладки
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_503_753)">
                                <path d="M7.99995 4.51054L7.18968 3.39006C6.94123 3.0465 6.6662 2.76153 6.37179 2.53386L6.37174 2.53382C5.79877 2.09069 5.16721 1.875 4.4696 1.875C3.5098 1.875 2.64097 2.25551 2.00445 2.94583L7.99995 4.51054ZM7.99995 4.51054L8.81029 3.39011M7.99995 4.51054L8.81029 3.39011M8.81029 3.39011C9.05885 3.04642 9.33377 2.76156 9.62808 2.53387L8.81029 3.39011ZM6.20794 12.5491L6.20799 12.5491L6.21093 12.5516C6.74901 13.0102 7.36215 13.5328 8.00002 14.0899C8.63302 13.5369 9.24202 13.0178 9.77724 12.5616L9.79235 12.5488L9.79244 12.5487C11.4267 11.156 12.7422 10.0308 13.6432 8.94347L13.6433 8.94342C14.6159 7.76984 15 6.74939 15 5.68335C15 4.59577 14.628 3.63201 13.9955 2.94592C13.359 2.25552 12.4902 1.875 11.5304 1.875C10.8329 1.875 10.2013 2.09065 9.62821 2.53377L6.20794 12.5491ZM6.20794 12.5491C4.57342 11.1562 3.25796 10.0308 2.35685 8.94355C1.38413 7.76977 1 6.74932 1 5.68347C1 4.59578 1.37199 3.63202 2.00436 2.94592L6.20794 12.5491Z" stroke-width="2"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_503_753">
                                    <rect width="16" height="16" fill="white"/>
                                </clipPath>
                            </defs>
                            </svg>
                        </Link>
                        <Link className="header__menu-auth" to={"/login"}>
                            Вход и регистрация
                        </Link>
                    </div>
                </nav>
            </div>
            <div className='header__row'>
                <Logo />
                <ul className='header__catalog'>
                    <li className='header__catalog-item'>
                        <a className='header__catalog-item-link' href="#">Квартиры на сутки</a>
                        <svg width="14" height="16" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.33796 1.74419C6.6054 0.627907 5.3961 0 4.03564 0C2.6868 0 1.4775 0.627907 0.721683 1.74419C-0.0341305 2.83721 -0.208549 4.23256 0.256567 5.45349C0.384474 5.77907 0.582148 6.11628 0.837962 6.4186L3.77982 9.88372C3.84959 9.95349 3.91936 10 4.02401 10C4.12866 10 4.19843 9.95349 4.2682 9.88372L7.22168 6.4186C7.4775 6.11628 7.6868 5.7907 7.80308 5.45349C8.2682 4.23256 8.09378 2.83721 7.33796 1.74419ZM4.03564 5.86047C3.03564 5.86047 2.21006 5.03488 2.21006 4.03488C2.21006 3.03488 3.03564 2.2093 4.03564 2.2093C5.03564 2.2093 5.86122 3.03488 5.86122 4.03488C5.86122 5.03488 5.04727 5.86047 4.03564 5.86047Z" />
                        </svg>
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
                <a className="header__add-btn" href="#">+ Разместить объявление</a>
            </div>
        </header>

    );
  }
  
  export default Header;