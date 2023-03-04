import './carPage.css';
import CardsMotoAndCar from '../../productCards/forCarsAndMoto/cardsForMotoAndCar';
import { useState, useEffect } from 'react';

function CarPage() {
    const [state, setState] = useState()
    
    useEffect(() => {
        fetch('https://run.mocky.io/v3/8f9e1603-005d-41ef-87fc-654b753a7e23')
        .then(response => response.json())
        .then(response => setState(response));
    },[]);
    let newState;
    if (state) {
        const countState = (count) => state.filter(item => item.id < count)
        newState = countState(6)
    }
    
    return (
        <div className="car-page__wrap">
            <div className="car-page__title">Машины</div>
            <div className="car-cards__wrap">
            {newState ? newState.map((card, index) => 
                    <CardsMotoAndCar key={index} id={++index} props={card}/>
            ): true}
            </div>
        </div>
    )
}

export default CarPage