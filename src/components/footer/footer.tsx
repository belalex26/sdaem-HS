import Logo from '../../components/logo/logo';

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__container'>
            <div className='footer__info'>
                <Logo />
                <p>ИП Шушкевич Андрей Викторович УНП 192602485 Минским горисполкомом 10.02.2016 220068, РБ, г. Минск, ул. Осипенко, 21, кв.23 </p>
                <a href="+375 29 621 48 33">+375 29 621 48 33</a>, 
                <a href='sdaem@sdaem.by'>sdaem@sdaem.by</a>
                <p>Режим работы: 08:00-22:00</p>
            </div>
            <div className='footer__catalog'></div>
            <div className='footer__fast-filter'></div>
            <div className='footer__social-bar'></div>
            <div className='footer__pay-info'></div>
        </div>
    </footer>

  );
}

export default Footer