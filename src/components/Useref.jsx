import React,{useRef} from 'react'

const Useref = () => {


     let inputRef=useRef(null)
     const handleClick=()=>{
         inputRef.current.style.border="thick solid #0000FF"
     }
  return (

    <div>
        <input type="text" ref={inputRef}></input>
        <button onClick={handleClick}>Click here</button>
    </div>
  )
}

export default Useref