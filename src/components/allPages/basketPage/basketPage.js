import './basketPage.css'
import CardForBasket from '../../productCards/cardForBasket/cardForBasket';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BasketPage() {
    const [state, setState] = useState()
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`https://run.mocky.io/v3/ad5cfa38-a17b-4944-9d79-ad129135f8b9`)
        .then(response => response.json())
        .then(response => setState(response));
    },[]);

    let someState;
    if(state) {
        someState = state.filter(state => state.id === +id)
    }

    return (
        <>
        <div className="basket-page__wrap">
            {someState ? someState.map((card, index) => 
                    <CardForBasket key={index} id={index} props={card}/>
            ): true}
        </div>
        </>
    )
}

export default BasketPage