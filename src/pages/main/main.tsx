function Main() {
  return (
    <main className="main">
      <h1 className="main__title visually-hidden">Sdaem.by</h1>
      <section className="main__promo">
        <h2 className="main__promo-title">Sdaem.by - у нас живут
          <span>ваши объявления</span>
        </h2>
        <p>табы с фильтрами</p>
      </section>
      <section className="main__catalog">
        <h2 className="main__catalog-title visually-hidden">Каталог</h2>
        <div className="main__catalog-cards">
          <div className="main__catalog-item main__catalog-item--big">
            <p className="main catalog-item-subtitle">Снять квартиру</p>
            <h3 className="main__catalog-item-title">Квартиры на сутки</h3>
            <ul className="main__catalog-item-tag-list">
              <li className="main__catalog-item-tag">
                <a className="main__catalog-item-tag-link" href="#">
                  Минск
                </a>
              </li>
              <li className="main__catalog-item-tag">
                <a className="main__catalog-item-tag-link" href="#">
                  Витебск
                </a>
              </li>
              <li className="main__catalog-item-tag">
                <a className="main__catalog-item-tag-link" href="#">
                  Гродно
                </a>
              </li>
              <li className="main__catalog-item-tag">
                <a className="main__catalog-item-tag-link" href="#">
                  Гомель
                </a>
              </li>
              <li className="main__catalog-item-tag">
                <a className="main__catalog-item-tag-link" href="#">
                  Брест
                </a>
              </li>
              <li className="main__catalog-item-tag">
                <a className="main__catalog-item-tag-link" href="#">
                  Могилев
                </a>
              </li>
            </ul>
          </div>
          <div className="main__catalog-item">
            <p className="main catalog-item-subtitle">Снять коттедж на праздник</p>
            <h3 className="main__catalog-item-title">Коттеджи и усадьбы</h3>
            <a className="main__catalog-item-more" href="#" aria-label="Показать все"></a>
          </div>
          <div className="main__catalog-item">
            <p className="main catalog-item-subtitle">Попариться в бане с друзьями</p>
            <h3 className="main__catalog-item-title">Бани и сауны</h3>
            <a className="main__catalog-item-more" href="#" aria-label="Показать все"></a>
          </div>
          <div className="main__catalog-item main__catalog-item--big">
            <p className="main catalog-item-subtitle">Если нужна машина</p>
            <h3 className="main__catalog-item-title">Авто на прокат</h3>
            <a className="main__catalog-item-more" href="#" aria-label="Показать все"></a>
          </div>
        </div>
        <div className="main__catalog-lists">
          <p className="main__catalog-lists-title">Квартиры</p>
          <ul className="main__catalog-item-list">
            <li className="main__catalog-item-item">
              <a className="main__catalog-item-link" href="#"> Квартиры в Минске
                <span>3567</span>
              </a>
            </li>
            <li className="main__catalog-item-item">
              <a className="main__catalog-item-link" href="#"> Квартиры в Гомеле
                <span>2032</span>
              </a>
            </li>
            <li className="main__catalog-item-item">
              <a className="main__catalog-item-link" href="#"> Квартиры в Гродно
                <span>2032</span>
              </a>
            </li>
            <li className="main__catalog-item-item">
              <a className="main__catalog-item-link" href="#"> Квартиры в Могилеве
                <span>110</span>
              </a>
            </li>
            <li className="main__catalog-item-item">
              <a className="main__catalog-item-link" href="#"> Квартиры в Бресте
                <span>110</span>
              </a>
            </li>
            <li className="main__catalog-item-item">
              <a className="main__catalog-item-link" href="#"> Квартиры в Витебске
                <span>110</span>
              </a>
            </li>
          </ul>
          <p className="main__catalog-lists-title">Коттеджи и усадьбы</p>
          <ul className="main__catalog-item-list">
            <li className="main__catalog-item-item">
              <a className="main__catalog-item-link" href="#"> Аггроусадьбы
                <span>110</span>
              </a>
            </li>
            <li className="main__catalog-item-item">
              <a className="main__catalog-item-link" href="#"> Коттеджи
                <span>110</span>
              </a>
            </li>
            <li className="main__catalog-item-item">
              <a className="main__catalog-item-link" href="#"> Загородный комплекс
                <span>110</span>
              </a>
            </li>
            <li className="main__catalog-item-item">
              <a className="main__catalog-item-link" href="#"> Базы отдыха
                <span>110</span>
              </a>
            </li>
          </ul>
          <button type="button">Еще</button>
          <p className="main__catalog-lists-title">Популярные направления</p>
          <ul className="main__catalog-item-list">
            <li className="main__catalog-item-item">
              <a className="main__catalog-item-link" href="#">Коттеджи и усадьбы на о. Брасласких</a>
            </li>
            <li className="main__catalog-item-item">
              <a className="main__catalog-item-link" href="#">Коттеджи и усадьбы &#40;жилье&#41; на Нарочи</a>
            </li>
            <li className="main__catalog-item-item">
              <a className="main__catalog-item-link" href="#">Коттеджи и усадьбы &#40;жилье&#41; у воды, на берегу, на озере</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="main__flat">
        <p className="main__ads-flat-subtitle">Квартиры на сутки</p>
        <h2 className="main__flat-title">Аренда квартир в Минске</h2>
        <div>фильтры</div>
        <div className="main__flat-ads">
          <p className="main__flat-ads-text">
            слайдер
            <span>341</span>
            Предложений по Минску
          </p>
          <a href="#">Посмотреть все</a>
        </div>
      </section>
      <section className="main__maps">
        <h2 className="main__maps-title">Поиск квартир на карте</h2>
        <p className="main__maps-subtitle">Ищите квартиры на сутки в центре города, возле парка или в живописном районе</p>
        <a className="main__maps-link" href="#">Открыть карту</a>
      </section>
      <section>
        <h2 className="main__advantages-title">Преимущества</h2>
        <div className="main__advantages-cards">
          <div className="main__advantages-cards-item">
            <h3 className="main__advantages-cards-title">Начните привлекать клиентов бесплатно!</h3>
            <p className="main__advantages-cards-text">Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором возможно <span>бесплатно создавать и публиковать</span> объявления на сайте.</p>
            <a className="main__advantages-cards-link" href="#">+  Разместить объявление</a>
          </div>
          <div className="main__advantages-cards-item">
            <h3 className="main__advantages-cards-title">Поднимайте объявления</h3>
            <p className="main__advantages-cards-text">Вы в любое время можете <span>поднимать</span> объявления <span>вверх первой страницы</span> каталога, они разместятся сразу после платных объявлений до тех пор, пока другой пользователь не повторит процедуру.</p>
            <a className="main__advantages-cards-link" href="#">Узнать стоимость услуги</a>
          </div>
          <div className="main__advantages-cards-item main__maps-cards-item--gold">
            <h3 className="main__advantages-cards-title">Поднимайте объявления</h3>
            <p className="main__advantages-cards-text">Приоритетное размещение 
              <span>Gold</span> позволяет <span>закрепить ваше объявление</span> в верхней части каталога!</p>
            <p className="main__advantages-cards-text">Gold объявления <span>перемещаются каждые 5 мин</span> на 1 позицию, что делает размещение одинаковым для всех.</p>
            <a className="main__advantages-cards-link" href="#">Еще о тарифе Gold</a>
          </div>
        </div>
      </section>
      <section className="main__about">
        <p className="main__about-subtitle">Что такое SDAEM.BY</p>
        <h2 className="main__about-title">Квартира на сутки в Минске</h2>
        <p className="main__about-text">
          <span className="main__about-text-title"> Нужна квартира на сутки в Минске?</span>
          На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог насчитывает более 500 квартир. Благодаря удобной навигации вы быстро найдете подходящий вариант.
          <br />
          В каталоге представлены комфортабельные однокомнатные квартиры на сутки и квартиры с большим количеством комнат в разных районах города, с различной степенью удобства от дешевых до VIP с джакузи.
          <br />
          Чтобы снять квартиру на сутки в Минске, вам достаточно определиться с выбором и связаться с владельцем для уточнения условий аренды и заключить договор. Заметим, на сайте представлены исключительно квартиры на сутки без посредников, что избавляет посетителей от необходимости взаимодействовать с агентствами, тратя свое время и деньги. Также пользователи сайта могут совершенно бесплатно размещать объявления о готовности сдать квартиру на сутки.    
        </p>
      </section>
      <section className="main__news">
        <h2 className="main__news-title">Новости</h2>
        <ul className="main__news-list"></ul>
        <a className="main__news-link" href="#">Посмотреть все</a>
      </section>
    </main>
  );
}

export default Main;