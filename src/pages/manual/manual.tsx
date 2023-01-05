import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

import Top from '../../assets/img/top-tarif.png';
import Gold from '../../assets/img/top-tarif.png';
import Free from '../../assets/img/top-tarif.png';

import Manual1 from '../../assets/img/how-to-pay2.png';
import Manual2 from '../../assets/img/how-to-pay3.png';
import Manual3 from '../../assets/img/how-to-pay4.png';
import Manual4 from '../../assets/img/how-to-pay5.png';
import Manual5 from '../../assets/img/how-to-pay6.png';
import Manual6 from '../../assets/img/how-to-pay7.png';


function Manual() {
  return (
    <>
      <Header />
      <main className="manual">
        <h1 className="manual__title visually-hidden">Инструкция пользователя</h1>
        <section className="manual__promo">
            <h2 className="manual__promo-title">Инструкция по оплате, <br /> стоимость и система скидок</h2>
            <p className="manual__promo-text">Здесь вы найдете инструкцию оплаты, а также информацию о доступных тарифах размещения, пакетах поднятия, системе скидок.</p>
        </section>
        <section className="manual__rates">
            <h2 className="manual__rates-title visually-hidden">Тарифы</h2>
            <div className="manual__rates-card">
                <div className="manual__rates-card-img">
                    <img src={Top} alt="карточка объявления" />
                </div>
                <div className="manual__rates-card-content">
                    <p className="manual__rates-card-subtitle">тариф top</p>
                    <h3 className="manual__rates-card-title">Тариф ТОP</h3>
                    <p className="manual__rates-card-text">ТОП  - закрепляется на 1-ой позиции каталога и не участвует в ротации &#40;остается на занятом месте&#41;. Следующее объявление занимает 2-ое место и т.д.</p>
                    <ul className="manual__rates-card-price">
                        <li className="manual__rates-card-price-item">
                            <p className="manual__rates-card-price-item-title">Квартиры на сутки</p>
                            <p className="manual__rates-card-price-item-text">Минск: <span> 50 BYN </span> <span>/ 30 дней</span></p>
                            <p className="manual__rates-card-price-item-text">Областные города:  <span> 35 BYN </span> / <span> 30 дней</span></p>
                        </li>
                        <li className="manual__rates-card-price-item">
                            <p className="manual__rates-card-price-item-title">Коттеджи, усадьбы</p>
                            <p className="manual__rates-card-price-item-text"><span> 50 BYN</span> <span>/ 30 дней</span></p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="manual__rates-card manual__rates-card--right">
                <div className="manual__rates-card-img">
                    <img src={Gold} alt="карточка объявления" />
                </div>
                <div className="manual__rates-card-content">
                    <p className="manual__rates-card-subtitle">тариф gold</p>
                    <h3 className="manual__rates-card-title">тариф gold</h3>
                    <p className="manual__rates-card-text">Gold – ротация каждые 5 мин на 1 позицию между всеми объявлениями тарифа.</p>
                    <ul className="manual__rates-card-price">
                        <li className="manual__rates-card-price-item">
                            <p className="manual__rates-card-price-item-title">Квартиры на сутки</p>
                            <p className="manual__rates-card-price-item-text">Минск: <span> 25 BYN </span> <span>/ 30 дней</span></p>
                            <p className="manual__rates-card-price-item-text">Областные города:  <span> 15 BYN </span> / <span> 30 дней</span></p>
                        </li>
                        <li className="manual__rates-card-price-item">
                            <p className="manual__rates-card-price-item-title">Коттеджи, усадьбы</p>
                            <p className="manual__rates-card-price-item-text"><span> 25 BYN</span> <span>/ 30 дней</span></p>
                            <p className="manual__rates-card-price-item-text"><span> 50 BYN</span> <span>/ 90 дней</span></p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="manual__rates-card">
                <div className="manual__rates-card-img">
                    <img src={Free} alt="карточка объявления" />
                </div>
                <div className="manual__rates-card-content">
                    <p className="manual__rates-card-subtitle">тариф обычный</p>
                    <h3 className="manual__rates-card-title">Обычный тариф</h3>
                    <p className="manual__rates-card-text">Все объявления, которые обновлялись в течение 30 дней. Ограничение – 1 бесплатное поднятие в сутки. Если объявление не обновлялось 30 дней, то оно удаляется из каталога.</p>
                    <p className="manual__rates-card-text manual__rates-card-text--free">Стоимость: Бесплатно</p>
                </div>
            </div>
        </section>
        <section className="manual__lift">
            <p className="manual__lift-subtitle">поднятия</p>
            <h2 className="manual__lift-title">Доступные пакеты поднятий</h2>
            <ul className="manual__lift-list">
                <li className="manual__lift-item">
                    <p className="manual__lift-item-count">100 поднятий</p>
                    <p className="manual__lift-item-price">5 BYN</p>
                    <p className="manual__lift-item-time">30 дней</p>
                    <a className="manual__lift-item-link" href="#">Купить</a>
                </li>
                <li className="manual__lift-item">
                    <p className="manual__lift-item-count">200 поднятий</p>
                    <p className="manual__lift-item-price">10 BYN</p>
                    <p className="manual__lift-item-time">30 дней</p>
                    <a className="manual__lift-item-link" href="#">Купить</a>
                </li>
                <li className="manual__lift-item">
                    <p className="manual__lift-item-count">Анлим поднятий
                        <span>до 10 объявл. в ЛК</span>
                    </p>
                    <p className="manual__lift-item-price">50 BYN</p>
                    <p className="manual__lift-item-time">30 дней</p>
                    <a className="manual__lift-item-link" href="#">Купить</a>
                </li>
                <li className="manual__lift-item">
                    <p className="manual__lift-item-count">Анлим поднятий
                        <span>10 и более объявл. в ЛК</span>
                    </p>
                    <p className="manual__lift-item-price">100 BYN</p>
                    <p className="manual__lift-item-time">30 дней</p>
                    <a className="manual__lift-item-link" href="#">Купить</a>
                </li>
            </ul>
        </section>
        <section className="manual__sale">
            <h2 className="manual__sale-title">Система скидок</h2>
            <ul className="manual__sale-list">
                <li className="manual__sale-item">
                    <p className="manual__sale-item-title">По сроку размещения</p>
                    <p className="manual__sale-item-text">от 3 до 6 месяцев
                        <span>5%</span>
                    </p>
                    <p className="manual__sale-item-text">от 6 и более
                        <span>20%</span>
                    </p>
                </li>
                <li className="manual__sale-item manual__sale-item--while">
                    <p className="manual__sale-item-title">По количеству объявлений</p>
                    <p className="manual__sale-item-text">от 3 до 5 объявлени
                        <span>5%</span>
                    </p>
                    <p className="manual__sale-item-text">от 5 и более
                        <span>20%</span>
                    </p>
                </li>
                <li className="manual__sale-info">
                    <p>Скидки по сроку размещения и количеству объявлений
                        <span>СУММИРУЮТСЯ!</span>
                    </p>
                </li>
            </ul>
        </section>
        <section className="manual__sale-manual">
            <h2 className="manual__sale-manual-title">Как оплачивать</h2>
            <ol className="manual__sale-manual-list">
                <li className="manual__sale-manual-item"> 
                    <p className="manual__sale-manual-item-text">1. Внизу объявления, которое хотите оплатить, нажмите на кнопку  «Тариф» и выберите нужный тариф размещения.</p>
                    <img src={Manual1} alt="скриншот инструкции" />
                </li>
                <li className="manual__sale-manual-item">
                    <p className="manual__sale-manual-item-text">2. Вы можете оплатить сразу несколько объявлений, чтобы получить скидку. Для этого отметьте галочкой несколько объявлений или все с помощью кнопки «Выбрать все». Затем нажмите на кнопку «Оплатить выбранные» вверху таблицы с объявлениями.</p>
                    <img src={Manual2} alt="скриншот инструкции" />
                </li>
                <li className="manual__sale-manual-item">
                    <p className="manual__sale-manual-text">3. В появившемся окне укажите тариф и период размещения, после чего  будет отображаться сумма и размер скидки. Далее нажмите кнопку «Создать счет» и подтвердите действие. </p>
                    <img src={Manual3} alt="скриншот инструкции" />
                </li>
                <li className="manual__sale-manual-item">
                    <p className="manual__sale-manual-item-text">4. Проверьте правильность данных и выберите способ оплаты (картой или через ЕРИП).</p>
                    <img src={Manual4} alt="скриншот инструкции" />
                </li>
                <li className="manual__sale-manual-item">
                    <p className="manual__sale-manual-item-text">5. Далее Вас перенаправит на безопасную страницу webpay.by, где необходимо выбрать удобный способ оплаты:</p>
                    <img src={Manual5} alt="скриншот инструкции" />
                </li>
                <li className="manual__sale-manual-item">
                    <p className="manual__sale-manual-item-text">6. Для оплаты картой введите её данные и нажмите кнопку «оплатить»; для оплаты через ЕРИП Вы получите номер счета и путь в дереве ЕРИП для оплаты услуги. Найдите услугу и введите номер счета, после этого проверьте сумму и оплатите.</p>
                    <img src={Manual6} alt="скриншот инструкции" />
                </li>
            </ol>
            <p className="manual__sale-text">Вот и все! Сразу после оплаты объявление активируется и появится в каталоге 
                <a href="#">сайта</a>.</p>
            <p className="manual__sale-text">Помните, что Вы всегда можете позвонить или написать, если не получается оплатить или необходимо сделать корректировку.</p>
        </section>
        <ul className="manual__sale-contacts">
            <li className="manual__sale-contacts-item"> 
                <a href="tel:+375296214833"> +375&#40;29&#41; 621-48-33 &#40;Андрей&#41;</a>
                <span>&#40;viber, whatsApp, telegram&#41;</span>
            </li>
            <li className="manual__sale-contacts-item"> 
                <a href="malto:sdaem@sdaem.by">sdaem@sdaem.by</a>
            </li>
        </ul>
      </main>
      <Footer />
    </>
  );
}

export default Manual;