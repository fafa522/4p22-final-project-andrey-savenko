import './implantPage.css';
import CardImplant from '../../productCards/cardForImplant/cardForImplant';
import { useState, useEffect } from 'react';

function ImplantPage() {
    const [state, setState] = useState()
    
    useEffect(() => {
        fetch('https://run.mocky.io/v3/8f9e1603-005d-41ef-87fc-654b753a7e23')
        .then(response => response.json())
        .then(response => setState(response));
    },[]);
    let newState;
    if (state) {
        const countState = (count) => state.filter(item => item.id > count)
        newState = countState(8)
    }
    return (
        <div className="implant-page__wrap">
            <div className="implant-page__title">Импланты</div>
            <div className="implant-cards__wrap">
            {newState ? newState.map((card, index) => 
                    <CardImplant key={index} id={9+index} props={card}/>
            ): true}
            </div>
        </div>
    )
}

export default ImplantPage