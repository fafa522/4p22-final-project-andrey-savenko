import './motoPage.css';
import CardsMotoAndCar from '../../productCards/forCarsAndMoto/cardsForMotoAndCar';
import { useState, useEffect } from 'react';

function MotoPage() {
    const [state, setState] = useState()
    
    useEffect(() => {
        fetch('https://run.mocky.io/v3/8f9e1603-005d-41ef-87fc-654b753a7e23')
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