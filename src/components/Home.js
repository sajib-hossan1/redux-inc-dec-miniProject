import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deccNumber, incNumber } from '../actions';
import './Home.css'

const Home = () => {
    let [currentState, setCurrentState] = useState(0)

    const upNo = () => {
        setCurrentState(currentState + 10)
    }

    const dpNo = () => {
        if (currentState === 0) {
            return
        }
        setCurrentState(currentState - 1)
    }

    console.log(currentState);

    const myState = useSelector((state) => state.changeTheNum );
    const dispatch = useDispatch();

    console.log(myState);

    return (
        <div className='home-container'>
            <h1>Increament and Decreament</h1>
            <div className='mt-3'>
                <button onClick={ () => dispatch(deccNumber(1))} className='btn btn-outline-success'><h1>-</h1></button>
                    <h1 className='d-inline p-4'>{myState}</h1>
                <button onClick={ () => dispatch(incNumber(1))} className='btn btn-outline-success'><h1>+</h1></button>
            </div>
        </div>
    );
};

export default Home;