import React,{useEffect,useState} from 'react'
import axios from 'axios'

const InitialLoad = () => {


     const [state,setState]=useState({})


     const apiCall=()=>{

        axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then(response=>
        
        {
            setState(response.data)
            console.log(response)
        
        
        }).catch(err=>{

            console.log(err)
        })
     }

     useEffect(()=>{

        apiCall()


     },[])

  return (


    <div>
 
    <h1>{state.chartName}</h1>

      
    </div>
  )
}

export default InitialLoad