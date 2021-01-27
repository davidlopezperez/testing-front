import React from 'react'
import {useHistory} from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    const goPay = () => {
        history.push('/pagar')
    }
    return ( 
        <div>
            <h1>HOME</h1>
            <br></br>
            <br></br>
            <button
                onClick={goPay}
            >IR A PAGAR</button>
        </div>
     );
}
 
export default Home;