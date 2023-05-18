import { useState } from 'react';
import './Counter.css'
import CounterButton from '../CounterButton';

export default function Counter(){

    const [Count, setCount]= useState(0);

    function incrementCounter(by){
        setCount(Count+by);
    }
    function DecrementCounter(by){
        if(Count-by<0 || Count==0){
            return;
        }   
        setCount(Count-by);
    }
    function reset(){
        setCount(0);
    }

    return(
        <>
            <span className="Counter">{Count}</span>
            <CounterButton by={1} incrementMethod={incrementCounter} decrementMethod= {DecrementCounter}  />
            <CounterButton by={2}  incrementMethod={incrementCounter} decrementMethod= {DecrementCounter} />
            <CounterButton by={5}  incrementMethod={incrementCounter} decrementMethod= {DecrementCounter} />
            <button className='ResetButton' onClick={reset}>Reset</button>
        </>
    )

}


