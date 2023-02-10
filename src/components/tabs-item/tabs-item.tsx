import { Link } from 'react-router-dom';

function TabsItem() {
    return (
        <div className="tabs-item">
            <div className="tabs-item__label tabs-item__label--sity">
                <span className="tabs-item__label-text">Город</span>
                <div className="tabs-item__list">Выберите
                    <svg width="18" height="18" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 3.75L5 6.25L7.5 3.75" stroke="#664EF9" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className="tabs-item__label tabs-item__label--room">
                <span className="tabs-item__label-text">Комнаты</span>
                <div className="tabs-item__list">Выберите
                    <svg width="18" height="18" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 3.75L5 6.25L7.5 3.75" stroke="#664EF9" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <label className="tabs-item__label tabs-item__label--price">
                <span className="tabs-item__label-text">Цена за сутки (BYN)</span>
                <input className="tabs-item__input" type="number" placeholder="От"/>
                <input className="tabs-item__input" type="number" placeholder="До"/>
            </label>
            <button className="tabs-item__button">Больше опций
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_90_802)">
                    <path d="M6.91109 4.29814C6.91109 2.90551 5.937 1.73697 4.63453 1.4358V0.661897C4.63453 0.296309 4.33822 0 3.97264 0C3.60705 0 3.31074 0.296309 3.31074 0.661897V1.4358C2.00835 1.73689 1.03418 2.90551 1.03418 4.29814C1.03418 5.69077 2.00827 6.85931 3.31074 7.16048V17.3381C3.31074 17.7037 3.60705 18 3.97264 18C4.33822 18 4.63453 17.7037 4.63453 17.3381V7.16048C5.937 6.85931 6.91109 5.69077 6.91109 4.29814ZM2.35805 4.29814C2.35805 3.40781 3.08238 2.68348 3.97271 2.68348C4.86303 2.68348 5.58737 3.40781 5.58737 4.29814C5.58737 5.18846 4.86303 5.9128 3.97271 5.9128C3.08238 5.9128 2.35805 5.18846 2.35805 4.29814Z" fill="#664EF9"/>
                    <path d="M9.662 8.89222V0.661897C9.662 0.296309 9.36569 0 9.0001 0C8.63451 0 8.3382 0.296309 8.3382 0.661897V8.89222C7.03581 9.19331 6.06165 10.3619 6.06165 11.7546C6.06165 13.1472 7.03574 14.3157 8.3382 14.6169V17.3381C8.3382 17.7037 8.63451 18 9.0001 18C9.36569 18 9.662 17.7037 9.662 17.3381V14.6169C10.9644 14.3158 11.9386 13.1472 11.9386 11.7546C11.9386 10.3619 10.9645 9.19338 9.662 8.89222ZM7.38551 11.7546C7.38551 10.8642 8.10985 10.1399 9.00018 10.1399C9.8905 10.1399 10.6148 10.8642 10.6148 11.7546C10.6148 12.6449 9.8905 13.3692 9.00018 13.3692C8.10985 13.3692 7.38551 12.6449 7.38551 11.7546Z" fill="#664EF9"/>
                    <path d="M16.9657 7.20151C16.9657 5.80888 15.9916 4.64034 14.6891 4.33918V0.661897C14.6891 0.296309 14.3928 0 14.0272 0C13.6616 0 13.3653 0.296309 13.3653 0.661897V4.33918C12.0629 4.64027 11.0887 5.80888 11.0887 7.20151C11.0887 8.59415 12.0628 9.76269 13.3653 10.0639V17.3381C13.3653 17.7037 13.6616 18 14.0272 18C14.3928 18 14.6891 17.7037 14.6891 17.3381V10.0639C15.9916 9.76269 16.9657 8.59415 16.9657 7.20151ZM12.4126 7.20151C12.4126 6.31119 13.1369 5.58685 14.0273 5.58685C14.9176 5.58685 15.6419 6.31119 15.6419 7.20151C15.6419 8.09184 14.9176 8.81618 14.0273 8.81618C13.1369 8.81618 12.4126 8.09184 12.4126 7.20151Z" fill="#664EF9"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_90_802">
                    <rect width="18" height="18" fill="white" transform="translate(0.5)"/>
                    </clipPath>
                    </defs>
                </svg>
            </button>
            <Link className="tabs-item__link" to={"/cards"}>На карте
                <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0074 2.61628C9.9086 0.941861 8.09464 0 6.05394 0C4.03069 0 2.21673 0.941861 1.08301 2.61628C-0.0507075 4.25581 -0.312336 6.34884 0.385339 8.18023C0.577199 8.6686 0.873711 9.17442 1.25743 9.62791L5.67022 14.8256C5.77487 14.9302 5.87953 15 6.0365 15C6.19348 15 6.29813 14.9302 6.40278 14.8256L10.833 9.62791C11.2167 9.17442 11.5307 8.68605 11.7051 8.18023C12.4028 6.34884 12.1412 4.25581 11.0074 2.61628ZM6.05394 8.7907C4.55394 8.7907 3.31557 7.55233 3.31557 6.05233C3.31557 4.55233 4.55394 3.31395 6.05394 3.31395C7.55394 3.31395 8.79232 4.55233 8.79232 6.05233C8.79232 7.55233 7.57139 8.7907 6.05394 8.7907Z" fill="#FFD54F"/>
                </svg>
            </Link>
            <Link className="tabs-item__sublink" to={"/"}>Показать
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 15.8037L12.5 10.8037L7.5 5.80371" stroke="#242424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Link>
        </div>
    );
  }
  
  export default TabsItem;