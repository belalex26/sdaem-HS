import Visa from '../../assets/img/visa-icon.svg';
import Webpay from '../../assets/img/webpay-icon.svg';
import VerifiedVisa from '../../assets/img/verified-by-visa-icon.svg';
import Mastercard from '../../assets/img/mastercard-icon.svg';
import MastercardSecurecode from '../../assets/img/securecode-icon.svg';
import Belkart from '../../assets/img/belkart-icon.svg';


function PayList() {
    return (
        <ul className='pay-list'>
            <li className='pay-list__item'>
                <img className='pay-list__item-icon' src={Visa} alt='visa' />
            </li>
            <li className='pay-list__item'>
                <img className='pay-list__item-icon' src={Webpay} alt='visa' />
            </li>
            <li className='pay-list__item'>
                <img className='pay-list__item-icon' src={VerifiedVisa} alt='visa' />
            </li>
            <li className='pay-list__item'>
                <img className='pay-list__item-icon' src={Mastercard} alt='visa' />
            </li>
            <li className='pay-list__item'>
                <img className='pay-list__item-icon' src={MastercardSecurecode} alt='visa' />
            </li>
            <li className='pay-list__item'>
                <img className='pay-list__item-icon' src={Belkart} alt='visa' />
            </li>
        </ul>
    );
  }
  
  export default PayList;