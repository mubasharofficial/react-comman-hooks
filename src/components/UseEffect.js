import React ,{useState,useEffect} from 'react'

const UseEffect = () => {
  const [number,setnumber]= useState(0);
  const [state,setstate]=useState(10);

  useEffect(()=>{
    document.title = 'you clicktime'+number;
    console.log("title is changed"); 
  },[number]
  )

  return (
    <div>
      <h1>Hello Word its number{number}</h1>
      <h2>Hello word its state {state}</h2>
      <button onClick={()=>{setnumber(number+1)}} >Click To Number Up</button>
      <button onClick={()=>{setstate(state+1)}} >Click To state change</button>

    </div>
  )
}

export default UseEffect