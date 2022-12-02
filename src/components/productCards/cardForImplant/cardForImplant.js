import { Link } from 'react-router-dom';
import './cardForImplant.css';

function CardImplant ({props, id}) {
    return (
    <div className='cards-implant__wrap'>
        <img src={ props.img } alt= { props.alt } className='cards-implant__img'></img>
        <div className='title-cards__implant'>{ props.title }</div>
        <div className='description-cards__implant'>{ props.desc}</div>
        <Link to={`./${id}`} className='price-cards__implant'>{ props.price }</Link>
    </div>
    )  
}
export default CardImplant;