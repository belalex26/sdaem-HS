function AuthForm() {
  return (
    <form className="auth-form">
        <label className="auth-form__label">
            <input className="auth-form__input" type="text" name="name" id="name" />
        </label>
        <label className="auth-form__label">
            <input className="auth-form__input" type="password" name="password" id="password" />
        </label>
        <button className="auth-form__btn" type="submit">Войти</button>
        <label className="auth-form__label">
            <input className="auth-form__checkbox" type="checkbox" />
            <span>Запомнить меня</span>
        </label>
        <a href="#">Забыли пароль?</a>
    </form>

  );
}

export default AuthForm;