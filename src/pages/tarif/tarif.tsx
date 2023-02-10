import { Link } from 'react-router-dom';

import flatCard from "../../assets/img/flat-card.png"
import houseCard from "../../assets/img/house-card.png"
import goldCard from "../../assets/img/gold-card.png"
import topCard from "../../assets/img/top-card.png"
import MacBoock from "../../assets/img/MacBookPro.png"
import MainLayout from '../../components/main-layout/main-layout';
import PayList from '../../components/pay-list/pay-list';


function Tarif() {
    return (
        <MainLayout>
            <section className="tarif__hero">
                <ul className="tarif__hero-breadcrumps breadcrumps breadcrumps--main">
                    <li className="breadcrumps__item" aria-label="Главная">
                        <Link className="breadcrumps__item-link" to={"/"}>
                            <svg className="breadcrumps__item-link-icon" width="13" height="12" viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3981 5.36452L7.01407 0.458638C6.77775 0.243272 6.42138 0.243295 6.18515 0.458615L0.801126 5.36454C0.611821 5.53704 0.54929 5.80282 0.641774 6.04163C0.734282 6.28043 0.959516 6.43472 1.21562 6.43472H2.07554V11.35C2.07554 11.5449 2.23355 11.7029 2.42843 11.7029H5.37954C5.57442 11.7029 5.73244 11.545 5.73244 11.35V8.36562H7.46685V11.3501C7.46685 11.545 7.62487 11.703 7.81975 11.703H10.7707C10.9656 11.703 11.1236 11.545 11.1236 11.3501V6.43472H11.9837C12.2398 6.43472 12.465 6.28041 12.5575 6.04163C12.6499 5.8028 12.5874 5.53704 12.3981 5.36452Z"/>
                            </svg>
                        </Link>
                    </li>
                    <li className="breadcrumps__item">Размещение и тарифы</li>
                </ul>
                <h1 className="tarif__hero-title">Размещение и тарифы </h1>
                <img src={MacBoock} width="924" height="595" alt="MacBoock img" />
            </section>
            <section className="tarif__about">
                <div className="tarif__about-reg">
                    <h3 className="tarif__title--black tarif__about-reg-title">Регистрация</h3>
                    <p className="tarif__text tarif__about-reg-text">Пройдя простую регистрацию на сайте у Вас появится <span>личный кабинет</span>, в котором возможно бесплатно создавать и публиковать объявления на сайте. Таким образом, через несколько минут Вы можете начать привлечение клиентов!</p>
                    <Link className="tarif__about-reg-btn" to={"/auth"}>+ Разместить объявление</Link>
                </div>
                <div className="tarif__about-wrap">
                    <div className="tarif__about-free">
                        <h3 className="tarif__title tarif__about-free-title">Бесплатное размещение</h3>
                        <p className="tarif__text tarif__about-free-text">Бесплатное размещение позволит вам:</p>
                        <ul className="tarif__about-free-list">
                            <li className="tarif__about-free-item">• <span>добавить</span> необходимое количество уникальных объявлений (запрещается их дублирование, при нарушении аккаунт и все объекты будут удалены);</li>
                            <li className="tarif__about-free-item">• в любое время поднимать их вверх первой страницы каталога, воспользовавшись кнопкой ПОДНЯТЬ напротив объявления (размещаются сразу после платных объявлений до тех пор, пока другой пользователь не повторит процедуру);</li>
                            <li className="tarif__about-free-item">• редактировать объекты.</li>
                        </ul>
                    </div>
                    <div className="tarif__about-gold">
                        <h3 className="tarif__title tarif__about-gold-title">Платное размещение Gold</h3>
                        <img className="tarif__about-gold-img" src={goldCard} alt="пример продвижения" />
                        <ul className="tarif__about-gold-list">
                            <li className="tarif__about-gold-item">• доступны все функции бесплатного размещения;</li>
                            <li className="tarif__about-gold-item">• возможность закрепить своё объявление в верхней части каталога (Приоритетное размещение Gold);</li>
                            <li className="tarif__about-gold-item">• Gold объявления перемещаются каждые 5 мин на 1 позицию, что делает размещение одинаковым для всех.</li>
                        </ul>
                    </div>
                    <div className="tarif__about-top">
                        <h3 className="tarif__title tarif__about-top-title">Премиум размещение Top</h3>
                        <img className="tarif__about-top-img" src={topCard} alt="пример продвижения" />
                        <ul className="tarif__about-top-list">
                            <li className="tarif__about-top-item">• доступны все функции платного размещения;</li>
                            <li className="tarif__about-top-item">• объявления тарифа Top закрепляются на 1-ой позиции и не участвует в ротации (остаются на занятом месте). Следующее объявление занимает 2-ое место и т.д.</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="tarif__contacts">
                <h2 className="tarif__title tarif__title--black tarif__contacts-title">Контакты</h2>
                <p className="tarif__contacts-text">Узнать о свободных местах и сделать заявку на платное размещение Вы можете:</p>
                <div className="tarif__contacts-wrap">
                    <a className="tarif__contacts-link tarif__contacts-link--phone" href="#">+375(29) 621-48-33 (Андрей)</a>
                    <p className="tarif__contacts-link-text">(viber, whatsApp, telegram)</p>
                    <a className="tarif__contacts-link tarif__contacts-link--mail" href="#">sdaem@sdaem.by</a>
                </div>
            </section>
            <section className="tarif__price">
                <h2 className="tarif__title tarif__title--black  tarif__price-title">Стоимость приоритетного размещения</h2>
                <div className="tarif__price-wrap">
                    <img src={flatCard} alt="карточка с прайсом для квартир" />
                    <img src={houseCard} alt="карточка с прайсом для домов" />
                </div>
            </section>
            <section className="tarif__pay-check">
                <h2 className="tarif__pay-title visually-hidden">Способы оплаты</h2>
                <p className="tarif__pay-info">Оплату возможно произвести 2 способами:</p>
                <div className="tarif__pay-methods tarif__pay-check-wrap">
                    <p className="tarif__pay-methods-title">1. Оплата через "Расчет" (ерип)</p>
                    <p className="tarif__pay-methods-text">Оплатить размещение Вы можете через систему "pасчет" (ЕРИП), в любом удобном для Вас месте, в удобное для Вас время, в удобном для Вас пункте банковского обслуживания – интернет-банке, с помощью мобильного банкинга, инфокиоске, кассе банков, банкомате и т.д.
                        <br />
                        <br />
                        Совершить оплату можно с использованием наличных денежных средств, электронных денег и банковских платежных карточек в пунктах банковского обслуживания банков, которые оказывают услуги по приему платежей, а также посредством инструментов дистанционного банковского обслуживания.</p>
                    <p className="tarif__pay-methods-title">Для проведения платежа необходимо:</p>
                    <ol className="tarif__pay-methods-list">
                        <li className="tarif__pay-methods-item">
                            <span>Выбрать:</span>
                            <ul className="tarif__pay-methods-sublist">
                                <li className="tarif__pay-methods-subItem">Пункт "Система "Расчет" (ЕРИП)</li>
                                <li className="tarif__pay-methods-subItem">Интернет-магазины/сервисы</li>
                                <li className="tarif__pay-methods-subItem">S</li>
                                <li className="tarif__pay-methods-subItem">Sdaem.by</li>
                            </ul>
                        </li>
                        <li className="tarif__pay-methods-item">Для оплаты ввести <span>Номер заказа,</span> который вы получили.</li>
                        <li className="tarif__pay-methods-item"><span>Проверить</span> корректность информации и <span>совершить платеж.</span></li>
                    </ol>
                    <p className="tarif__pay-methods-text tarif__pay-methods-intro">Если Вы осуществляете платеж в кассе банка, пожалуйста, сообщите кассиру о необходимости проведения платежа через систему ”Расчет“ (ЕРИП).</p>
                </div>
            </section>
            <section className="tarif__pay-card">
                <p className="tarif__pay-methods-title">2. Оплата банковской картой через систему электронных платежей WEBPAY</p>
                <p className="tarif__pay-methods-text">Система предоставляет возможность оплаты карточками 
                    <br/> международных платежных систем VISA и MasterCard всех типов и
                    <br/>БЕЛКАРТ.</p>
                <PayList />
                <p className="tarif__pay-methods-title">Процедура заказа:</p>
                <ul className="tarif__pay-methods-list">
                    <li className="tarif__pay-methods-item">Выберите в личном кабинете необходимую услугу.</li>
                    <li className="tarif__pay-methods-item">Выберите подходящие для вас способы оплаты (банковской картой или через ЕРИП).</li>
                    <li className="tarif__pay-methods-item">Заполните специальную форму предложенную системой и нажмите кнопку «Оформить заказ».</li>
                </ul>
                <div className="tarif__pay-card-wrap">
                    <div className="tarif__pay-card-left-col">
                        <p>Передача данных осуществляется по отдельному каналу с применением современных методов шифрования. При этом исключается любая возможность перехвата конфиденциальной информации. Данные передаются в зашифрованном виде и сохраняются только на специализированном сервере системы WEBPAY™.</p>
                        <p><span>После совершения оплаты с использованием банковской карточки необходимо сохранять полученные карт-чеки</span> для сверки с выпиской из карт-счёта (с целью подтверждения совершённых операций в случае возникновения спорных ситуаций).</p>
                        <p><span>При невозможности самостоятельной оплаты через ЕРИП или пластиковой картой в личном кабинете необходимо связаться с администратором сайта</span> (контакты и способы связи указаны выше), согласовать   место, назвать id номер объявления, которое необходимо разместить и произвести оплату. После этого администратор самостоятельно разместит приоритетные объявления в течение 1 часа.</p>
                    </div>
                    <div className="tarif__pay-card-right-col">
                        <p>При оплате банковской платежной картой возврат денежных средств осуществляется на ту же карточку, с которой была произведена оплата. Для их возврата необходимо обратиться к администрации сайта: <span>sdaem@sdaem.by</span> или по телефону <span>+375 29 621 48 33 Андрей.</span></p>
                        <p><span>Минимальный срок приоритетного размещения составляет - 1 месяц.</span></p>
                        <p>Услуга считается оказанной, когда объявления были размещены на согласованных местах и на согласованный период времени. В случае отмены заказа до истечения минимального срока размещения принятые платежи не возвращаются.</p>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default Tarif;