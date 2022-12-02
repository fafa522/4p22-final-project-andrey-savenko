import './headerMain.css';
import { Link } from 'react-router-dom';

function HeaderMain() {
    return (
        <div className='header__wrap'>
            <Link to='/'  className='header__logo'>night city shop</Link>
            <div className='header__menu'>
                <a href='./opinion' className='menu-link__reg'>Оставить отзыв</a>
            </div>
        </div>
    )

}
export default HeaderMain;