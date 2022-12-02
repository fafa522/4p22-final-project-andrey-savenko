import './motoPage.css';
import CardsMotoAndCar from '../../productCards/forCarsAndMoto/cardsForMotoAndCar';
import { useState, useEffect } from 'react';

function MotoPage() {
    const [state, setState] = useState()
    
    useEffect(() => {
        fetch('http://localhost:3000/card')
        .then(response => response.json())
        .then(response => setState(response));
    },[]);
    let newState;
    if (state) {
        const countState = (start, end) => state.filter(item => item.id < end && item.id > start)
        newState = countState(5 , 9)
    }
    
    return (
        <div className="moto-page__wrap">
            <div className="moto-page__title">Мотоциклы</div>
            <div className="moto-cards__wrap">
            {newState ? newState.map((card, index) => 
                    <CardsMotoAndCar key={index} id={6+index} props={card}/>
            ): true}
            </div>
        </div>
    )
}

export default MotoPage