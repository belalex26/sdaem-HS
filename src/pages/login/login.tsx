import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

type FormData = {
  login: string,
  password: string
};

function Login() {

  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <section className="login">
      <div className="login__content">
        <h1 className="login__title">Авторизация</h1>
        <p className="login__text">Авторизируйтесь, чтобы начать публиковать свои объявления</p>
        <form className="login__form">
          <label className="login__label">
            <input className="login__input" type="text" {...register("login", { required: true, minLength: 3 })} placeholder="Логин"/>
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_305_638)">
              <path d="M10.0013 0C7.14418 0 4.80859 2.33559 4.80859 5.19275C4.80859 8.04991 7.14418 10.3855 10.0013 10.3855C12.8585 10.3855 15.1941 8.04991 15.1941 5.19275C15.1941 2.33559 12.8585 0 10.0013 0Z"/>
              <path d="M18.913 14.535C18.7769 14.1949 18.5955 13.8774 18.3915 13.5826C17.3484 12.0407 15.7384 11.0203 13.9244 10.7708C13.6976 10.7482 13.4482 10.7935 13.2668 10.9296C12.3144 11.6325 11.1806 11.9953 10.0014 11.9953C8.82228 11.9953 7.68851 11.6325 6.73612 10.9296C6.5547 10.7935 6.30526 10.7255 6.07853 10.7708C4.26446 11.0203 2.63183 12.0407 1.61143 13.5826C1.40735 13.8774 1.22592 14.2176 1.0899 14.535C1.02189 14.6711 1.04454 14.8298 1.11256 14.9659C1.29398 15.2833 1.52071 15.6008 1.72479 15.8729C2.04224 16.3038 2.38239 16.6892 2.76789 17.052C3.08534 17.3695 3.44815 17.6643 3.81099 17.9591C5.60236 19.297 7.75657 19.9999 9.97879 19.9999C12.201 19.9999 14.3552 19.2969 16.1466 17.9591C16.5094 17.687 16.8722 17.3695 17.1897 17.052C17.5525 16.6892 17.9153 16.3037 18.2328 15.8729C18.4595 15.5781 18.6636 15.2833 18.845 14.9659C18.9583 14.8298 18.981 14.6711 18.913 14.535Z" />
              </g>
              <defs>
              <clipPath id="clip0_305_638">
              <rect width="20" height="20" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </label>
          <label className="login__label">
            <input className="login__input" type="password" {...register("password", { required: true})} placeholder="Пароль"/> 
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.3" clip-path="url(#clip0_169_21)">
              <path d="M15.625 7.5H15V5C15 2.2425 12.7575 0 9.99999 0C7.24249 0 4.99999 2.2425 4.99999 5V7.5H4.37499C3.34166 7.5 2.49999 8.34083 2.49999 9.375V18.125C2.49999 19.1592 3.34166 20 4.37499 20H15.625C16.6583 20 17.5 19.1592 17.5 18.125V9.375C17.5 8.34083 16.6583 7.5 15.625 7.5ZM6.66666 5C6.66666 3.16167 8.16166 1.66667 9.99999 1.66667C11.8383 1.66667 13.3333 3.16167 13.3333 5V7.5H6.66666V5ZM10.8333 13.935V15.8333C10.8333 16.2933 10.4608 16.6667 9.99999 16.6667C9.53916 16.6667 9.16666 16.2933 9.16666 15.8333V13.935C8.67083 13.6458 8.33333 13.1142 8.33333 12.5C8.33333 11.5808 9.08083 10.8333 9.99999 10.8333C10.9192 10.8333 11.6667 11.5808 11.6667 12.5C11.6667 13.1142 11.3292 13.6458 10.8333 13.935Z"/>
              </g>
              <defs>
              <clipPath id="clip0_169_21">
              <rect width="20" height="20" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </label>
          <div className="login__wrap">
            <label className="login__checkbox-label">
              <input className="login__checkbox-toggle-input" type="checkbox" name="remember" />
              <span className="login__checkbox-toggle-text">Запомнить меня</span>
            </label>
            <a className="login__reset" href="#">Забыли пароль?</a>
          </div>
          <button className="login__btn" type="submit">Войти</button>
        </form>
        <div className="login__content-text">
          <p className="login__singIn">Еще нет аккаунта?&nbsp;
            <Link className="login__singIт-link" to={"/auth"}>Создайте акканут</Link>
          </p>
        </div>
      </div>
    </section>

  );
}

export default Login;