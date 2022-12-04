import './headerMainAll.css';
import { Link } from 'react-router-dom';

function HeaderMain() {
    return (
        <div className='header-main__wrap'>
            <Link to='/'  className='header__logo'>night city shop</Link>
            <div className='header__menu'>
                <Link to='/opinion' className='menu-link__reg'>Оставить отзыв</Link>
            </div>
        </div>
    )

}
export default HeaderMain;