import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

type FormData = {
  auth: string,
  email: string,
  password: string
};

function Auth() {

  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit(data => console.log(data));


  return (
    <section className="auth">
      <div className="auth__content">
        <h1 className="auth__title">Регистрация</h1>
        <div className="auth__auth-container">
          <form className="auth__form">
            <label className="auth__label">
                <input className="auth__input" type="text" {...register("auth", { required: true, minLength: 3 })} placeholder="Логин"/>
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
            <label className="auth__label">
                <input className="auth__input" type="text" {...register("email", { required: true, minLength: 3 })} placeholder="Электронная почта"/>
                <svg width="18" height="17" viewBox="0 0 29 28" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_471_1258)">
                  <path d="M25.7111 24.72C26.3292 24.72 26.8648 24.5159 27.3202 24.1129L19.529 16.3214C19.3421 16.4553 19.1609 16.5855 18.9897 16.7092C18.4067 17.1388 17.9335 17.474 17.5701 17.7142C17.2068 17.955 16.7234 18.2004 16.1199 18.4509C15.5161 18.7017 14.9536 18.8268 14.4317 18.8268H14.4164H14.4012C13.8793 18.8268 13.3167 18.7018 12.713 18.4509C12.1092 18.2004 11.6258 17.955 11.2628 17.7142C10.8995 17.474 10.4265 17.1389 9.84315 16.7092C9.68059 16.59 9.5003 16.4593 9.30538 16.3193L1.5127 24.1129C1.96799 24.5159 2.50396 24.72 3.12207 24.72H25.7111Z"/>
                  <path d="M2.2171 11.4153C1.63409 11.0267 1.11709 10.5815 0.666992 10.0801V21.9342L7.53412 15.0671C6.1603 14.108 4.39021 12.8921 2.2171 11.4153Z" />
                  <path d="M26.6325 11.4153C24.5423 12.8301 22.7658 14.048 21.3027 15.0698L28.1671 21.9345V10.0801C27.727 10.5714 27.2155 11.0163 26.6325 11.4153Z" />
                  <path d="M25.7111 3.11328H3.12219C2.33413 3.11328 1.72826 3.3794 1.30382 3.91108C0.879036 4.44301 0.666992 5.10825 0.666992 5.90604C0.666992 6.55046 0.948385 7.2487 1.51092 8.00097C2.07346 8.75293 2.67204 9.34358 3.30638 9.7732C3.65412 10.0189 4.70281 10.7479 6.45243 11.9601C7.39691 12.6146 8.21828 13.1851 8.92411 13.6774C9.52574 14.0966 10.0446 14.4596 10.473 14.7608C10.5221 14.7953 10.5995 14.8507 10.7021 14.9241C10.8127 15.0035 10.9527 15.1043 11.1253 15.229C11.4578 15.4694 11.734 15.6638 11.954 15.8123C12.1737 15.9608 12.4398 16.1267 12.7521 16.311C13.0641 16.4949 13.3583 16.6333 13.6345 16.7253C13.9108 16.8173 14.1665 16.8634 14.4018 16.8634H14.4171H14.4323C14.6676 16.8634 14.9233 16.8173 15.1996 16.7253C15.4758 16.6333 15.7698 16.4952 16.0821 16.311C16.394 16.1267 16.6598 15.9605 16.8802 15.8123C17.1002 15.6638 17.3764 15.4695 17.7089 15.229C17.8812 15.1043 18.0212 15.0034 18.1317 14.9243C18.2344 14.8506 18.3117 14.7956 18.3612 14.7608C18.6949 14.5286 19.215 14.1671 19.9142 13.6816C21.1864 12.7976 23.0601 11.4966 25.5431 9.7732C26.2899 9.25161 26.9138 8.62217 27.4152 7.88578C27.9158 7.1494 28.1667 6.37696 28.1667 5.56873C28.1667 4.89346 27.9234 4.31564 27.4378 3.83439C26.9517 3.35373 26.3761 3.11328 25.7111 3.11328Z"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_471_1258">
                  <rect width="27.5" height="27.5" fill="white" transform="translate(0.666992 0.166504)"/>
                  </clipPath>
                  </defs>
                </svg>
            </label>
            <label className="auth__label">
              <input className="auth__input" type="password" {...register("password", { required: true})} placeholder="Пароль"/>
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
            <label className="auth__label">
              <input className="auth__input" type="password" {...register("password", { required: true})} placeholder="Повторите пароль"/>
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
            <ReCAPTCHA
              sitekey="6LdfblEkAAAAAIgK8U3tgzGR4qFhwXqO43_Zhjnx"
            />,
            <div className="auth__error">Ошибка ввода
              <svg width="25" height="25" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5 3C10.875 3 3 10.875 3 20.5C3 30.125 10.875 38 20.5 38C30.125 38 38 30.125 38 20.5C38 10.875 30.125 3 20.5 3ZM20.5 6.5C22.425 6.5 23.825 8.075 23.65 10L22.25 24H18.75L18.05 17L17.35 10C17.175 8.075 18.575 6.5 20.5 6.5ZM20.5 34.5C18.575 34.5 17 32.925 17 31C17 29.075 18.575 27.5 20.5 27.5C22.425 27.5 24 29.075 24 31C24 32.925 22.425 34.5 20.5 34.5Z"/>
              </svg>
            </div>
            <button className="auth__btn" type="submit">Зарегистрироваться</button>
          </form>
          <div className="auth__content-text">
            <p className="auth__rule-title">Пользователь обязуется:</p>
            <ul className="auth__rule-list">
              <li className="auth__rule-item">&#8226;&#160;предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта;</li>
              <li className="auth__rule-item">&#8226;&#160;добавлять фотографии объектов соответствующие действительности. Администрация сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем, если сочтет, что информация не соответствует действительности, носит оскорбительный характер, нарушает права и законные интересы других граждан либо действующее законодательство Республики Беларусь.</li>
            </ul>
            <p className="auth__singIn">Уже есть аккаунт?
              <Link className="auth__singIт-link" to={"/login"}>Войдите</Link>
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Auth;