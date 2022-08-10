import React, { useMemo, useState } from 'react';
function squareNumber_fun(number){
    console.log("Square Number Have been done");
    return Math.pow(number,2);
}


const UseMemo=()=>{
    const [number,setnumber]= useState(0);
    const squareNumber = useMemo(()=>{squareNumber_fun(number)},[number]);
    const [counter,setCounter]=useState(0);

    const onChangeHandler = (e)=>{
        setnumber(e.target.value);
    };
    const counterHandler = ()=>{
        setCounter(counter + 1)
    };
return(
    <div>
    <h1>hello world</h1>
    <input type="number" placeholder='Enter Number'
    value={number} onChange={onChangeHandler} />
    <div>OUTPUT:{squareNumber}</div>
    <button onClick={counterHandler}>Counter ++</button>
    <div>Counter:{counter}</div>
</div>
)
}

export default UseMemo;