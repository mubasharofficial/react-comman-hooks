import React,{useState} from 'react';

const UseState = () => {
    const [number,setNumber]=useState(0);
    const handleNumber = ()=>{
        setNumber(number+1);
    }
  return (
    <div>
        <h1>Hello Number Is {number}</h1>
        <button onClick={handleNumber}> Click Me </button>
    </div>
  )
}

export default UseState