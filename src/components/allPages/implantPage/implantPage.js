// import './implantPage.css';
// import CardImplant from '../../productCards/cardForImplant/cardForImplant';
// import implantimg1 from '../../../assets/imp/imp1.png'
// import implantimg2 from '../../../assets/imp/imp2.png'
// import implantimg3 from '../../../assets/imp/imp3.png'
// import implantimg4 from '../../../assets/imp/imp4.png'
// import implantimg5 from '../../../assets/imp/imp5.png'

// function ImplantPage(props) {
//     return (
//     <div className="implant-page__wrap">
//         <div className="implant-page__title">Импланты</div>
//             <div className="implant-cards__wrap">
//                 <CardImplant img={ implantimg1 } title='Титановые кости' description='Увеличивает грузподъёмность на 20%' price="1 000" />
//                 <CardImplant img={ implantimg2 } title='Моноструна' description='Самозарядный провод, способный поразить нескольких врагов одновременно' price='55 000' />
//                 <CardImplant img={ implantimg3 } title='Клинки богомола' description='Два смертоносных клинка, которые пригодятся для рукопашного боя.' price='52 500' />
//                 <CardImplant img={ implantimg4 } title='Укреплённые сухожилия' description='Двойной прыжок' price='45 000' />
//                 <CardImplant img={ implantimg5 } title='Лапы рыси' description='Приглушают звук шагов на 50%' price='75 000' />
//             </div>
//     </div>
//     )

// }
// export default ImplantPage;


import './implantPage.css';
import CardImplant from '../../productCards/cardForImplant/cardForImplant';
import { useState, useEffect } from 'react';

function ImplantPage() {
    const [state, setState] = useState()
    
    useEffect(() => {
        fetch('http://localhost:3000/card')
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