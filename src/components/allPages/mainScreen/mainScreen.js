import './mainScreen.css';
import mapImg from '../../../assets/map.png';
import { Link } from 'react-router-dom';


const MainScreen = () => {
    return (
        <>
        <div className='main-screen'>
            <div className='text-categories'>Категории</div>
            <div className='main-content'>
                <div className='categories-wrap'>
                    <div className='car-wrap'>
                        <Link to='/carPage' className='categories__car'>Машины</Link>
                        <div className='desc-categories__car'>Машины на любой вкус и бюджет</div>
                    </div>
                    <div className='moto-wrap'>
                        <Link to='/motoPage' className='categories__moto'>Мотоциклы</Link>
                        <div className='desc-categories__moto'>У нас есть все виды мотоциклов</div>
                    </div>
                    <div className='implant-wrap'>
                    <Link to='/implantPage' className='categories__implant'>Импланты</Link>
                    <div className='desc-categories_implant'>Только качественный хром</div>
                    </div>
                </div>
                <div className='location-desc__wrap'>
                    <div className='location-description'>Мы находимся по адресу: 2372.66, 1328.22</div>
                    <img src={ mapImg } className='location-img' alt='oursLocationMap'></img>
                </div>
            </div>
        </div>
            <div className='footer__wrap'>
                <span className='footer__text'>Наш адрес: 2372.66, 1328.22</span>
                <span className='footer__text'>Бесплатная доставка</span>
                <span className='footer__text'>Акции</span>
            </div>
        </>
    )
}

export default MainScreen;