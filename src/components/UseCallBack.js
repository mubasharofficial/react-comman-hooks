import React, {useState,useCallback} from 'react'
const funccount= new Set(); // for creating object

const UseCallBack =  ()=>{
    const [count,setcount]= useState(0);
    const [number,setnumber]=useState(0);

    const incrementCounter=
    useCallback( ()=>{
        setcount(count + 1)
    },[count])
    const decrementCounter=
    useCallback(()=>{
        setcount(count -1)
    },[count])
    
    const mysetNumber=
    useCallback(()=>{
        setnumber(number+1);
    },[number])
    funccount.add(incrementCounter);
    funccount.add(decrementCounter);
    funccount.add(incrementCounter);
    alert(funccount.size)

    return(
        <div>
            Count:{count}
           <button onClick={mysetNumber}>Increment Number</button>
           <button onClick={decrementCounter}>decrement Counter  </button>
           <button onClick={incrementCounter}>Increment Counter </button>
        </div>
    )
}

export default UseCallBack;