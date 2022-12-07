import { useForm } from "react-hook-form";

type FormData = {
    firstName: string,
    email: string,
    message: string
  };

function ContactForm() {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(data => console.log(data));
  
    return (
      <form className="contact-form" onSubmit={onSubmit}>
          <label className="contact-form__label">
              <span className="contact-form__label-text">Ваше имя</span>
              <input className="contact-form__input" type="text" {...register("firstName", { required: true, minLength: 3 })}/>
              {errors.firstName && "Заполните поле"}
          </label>
          <label className="contact-form__label">
              <span className="contact-form__label-text">Ваша электронная почта</span>
              <input className="contact-form__input" type="email" {...register("email", { required: true, minLength: 3 })} />
              {errors.email && "Заполните поле"}
          </label>
            <span className=""></span>
          <label className="contact-form__label">
              <span className="contact-form__label-text">Ваше сообщение</span>
              <input className="contact-form__textarea" type="textarea" {...register("message", { required: true, minLength: 3 })}/>
              {errors.message && "Заполните поле"}
          </label>
          <button className="contact-form__btn" type="submit">
            Отправить
          </button>
      </form>
  
    );
  }
  
  export default ContactForm;