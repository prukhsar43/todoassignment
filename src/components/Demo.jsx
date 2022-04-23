import React,{useEffect,useState} from 'react'
 

const Demo = () => {

    const[state,setState]=useState("");

    const handleclick=()=>{

      setState(Math.random())
    }



    useEffect(()=>{

        console.log("At initial render")

        return()=>{

             //at the time of component unmount
        }


    },[])

    useEffect(()=>{

        console.log("After initial render and every rerender")
    })




  return (
    <div>
       <h1>{state}</h1>
        <button onClick={handleclick}>Click here</button>
    </div>
  )
}

export default Demo