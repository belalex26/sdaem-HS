import { Link } from 'react-router-dom';

function Confirmation() {

  return (
    <section className="сonfirmation">
      <div className="сonfirmation__content">
        <h1 className="сonfirmation__title">Подтвердите регистрацию</h1>
        <p className="сonfirmation__text">Письмо для подтверждения аккаунта отправлено почту. Перейдите по ссылке, указанной в письме. Если письма нет, то проверьте спам.</p>
        <Link className="сonfirmation__link" to={"/"}>Понятно</Link>
      </div>
    </section>

  );
}

export default Confirmation;