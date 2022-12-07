function ContactForm() {
    return (
      <form className="contact-form">
          <label className="contact-form__label">
              <span className="contact-form__label-text">Ваше имя</span>
              <input className="contact-form__input" type="text" name="name" id="name" />
          </label>
          <label className="contact-form__label">
              <span className="contact-form__label-text">Ваша электронная почта</span>
              <input className="contact-form__input" type="email" name="email" id="email" />
          </label>
          <label className="contact-form__label">
              <span className="contact-form__label-text">Ваше сообщение</span>
              <input className="contact-form__textarea" type="textarea" />
          </label>
          <button className="contact-form__btn" type="submit">Отправить</button>
      </form>
  
    );
  }
  
  export default ContactForm;