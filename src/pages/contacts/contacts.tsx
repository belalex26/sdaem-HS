import ContactForm from "../../components/contact-form/contact-form";

function Contacts() {
  return (
    <section className="contacts">
      <div className="container">
        <div className="contacts__content">
          <h1 className="contacts__title">Контакты</h1>
          <p className="contacts__intro">Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать Ваше мнение.</p>
          <ul className="contacts__list">
            <li className="contacts__item">
              220068, РБ, г. Минск, ул. Осипенко, 21, кв.23
            </li>
            <li className="contacts__item">
              <a className="contacts__item-phone" href="tel:+375296214833">+375 29 621-48-33 </a>
            </li>
            <li className="contacts__item">
              <a href="malto:sdaem@sdaem.by">sdaem@sdaem.by</a>
            </li>
            <li className="contacts__item">
              Режим работы: 08:00-22:00
            </li>
          </ul>
          <p className='contacts__info'>
            ИП Шушкевич Андрей Викторович<br />
            УНП 192602485 Минским горисполкомом 10.02.2016
          </p>
        </div>
          <ContactForm />
      </div>
    </section>

  );
}

export default Contacts;