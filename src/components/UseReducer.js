import React, {useReducer} from 'react';
const intialState= 0;
const reducer = (state,action) =>{
    switch(action)
    {
        case 'add':
            return state + 1;
            
        case 'subtract':
            return state -1;
        case 'reset':
           return  state=0;
        default:
            throw new Error("Un Expected");
    }

};

const UseReducer= ()=>{

    const [count,dispatch] = useReducer(reducer,intialState);
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>{dispatch('add')}}>Add</button>
            <button onClick={()=>{dispatch('subtract')}}>Subtract</button>
            <button onClick={()=>{dispatch('reset')}}>Reset</button>
        </div>
    )
}
export default UseReducer;
