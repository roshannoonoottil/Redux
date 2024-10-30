import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {

    const value = useSelector((state)=>{
        return state.value;
    });

    console.log(value);

    const dispatch = useDispatch();
    
    return (    
        <div>
            <button onClick={()=>{
                dispatch({
                    type:'INCREMENT'
                })
            }}>Increment</button>
            <label>{value}</label>
            <button onClick={()=>{
                dispatch({
                    type:'DECREMENT'
                })
            }}>Decrement</button>
        
        </div>
    )
}

export default Counter
