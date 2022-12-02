import './cardsformc.css';
import { Link } from 'react-router-dom';

function CardsMotoAndCar({props, id}) {
    return (
        <div className='cards__wrap'>
            <img src={ props.img } alt= { props.alt } className='cards__img'></img>
            <div className='title__cards'>{ props.title }</div>
            <div className='description__cards'> { props.desc }</div>
            <Link to={`./${id}`} className='price__cards'>{ props.price }</Link>
        </div>
    )

}
export default CardsMotoAndCar;