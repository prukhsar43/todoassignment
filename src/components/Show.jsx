import React from 'react'
import data from "../data/data.json";
import Card from './partials/Card';

const Show = () => {

  return (
    <div>

        {
            data.map(ele=>(
                 <Card singleData={ele} key={ele._id}/>
                
            ))
        }
    </div>
  )
}

export default Show