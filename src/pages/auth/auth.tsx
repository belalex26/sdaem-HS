import AuthForm from "../../components/reg-form/reg-form";

function Auth() {
  return (
    <section className="auth">
      <div className="container">
        <h1 className="auth__title">Регистрация</h1>
        <AuthForm />
        <div className="auth__content">
            <p className="auth__rule-title">Пользователь обязуется:</p>
            <ul className="auth__rule-list">
                <li className="auth__rule-item">предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта;</li>
                <li className="auth__rule-item">добавлять фотографии объектов соответствующие действительности. Администрация сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем, если сочтет, что информация не соответствует действительности, носит оскорбительный характер, нарушает права и законные интересы других граждан либо действующее законодательство Республики Беларусь.</li>
            </ul>
            <p className="auth__singIn">Уже есть аккаунта?
                <a className="auth__singIт-link" href="#">Войдите</a>
            </p>
        </div>
        
      </div>
    </section>

  );
}

export default Auth;