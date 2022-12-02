import './cardForBasket.css';
import { useState } from 'react';


const CardForBasket = ({props}) => {

    const[consoleAll, setConsole] = useState('')

    const handlerClick = (event) => {
        event.preventDefault()
       setConsole(console.log([props.title, props.desc, props.price ]))
    }

    return (
    <div className='cards-basket__wrap'>
        <img src={ props.img } alt= { props.alt } className='cards-basket__img'></img>
        <div className='title-cards__basket'>{ props.title }</div>
        <div className='description-cards__basket'>{ props.desc}</div>
        <button onClick={handlerClick} value={consoleAll} className='price-cards__basket'>{ props.price }</button>
    </div>
    )  
}
export default CardForBasket;