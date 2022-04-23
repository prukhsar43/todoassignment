import React,{useState,useEffect} from 'react'

const Todo = () => {
    /**
     * const [state,setState]=useState("");
     * const [tasks,setTasks]=useState([]);
     */

    
    const [state,setState] =useState({
        task:"",
        date:""
    })

    const [tasks,setTasks]=useState([]);

    const handleChange=(event)=>{
       // state[event.target.name]=event.target.value;
        setState({...state,[event.target.name]:event.target.value}) // not trigerring the re render

      


    }

    // creator
    // Duration 

    const clickHandler=()=>{
        /*
        const items=[...tasks];
        items.push(state);
       // tasks.push(state);
        setTasks(items); // We are
        */

         
       setTasks([...tasks,state]);
       setState({
           task:"",
           date:""
       })

    }

    const deleteTask=(index)=>{
        //console.log(index);

        // We have to modify the tasks array and delete the item from the array 

        //console.log(tasks);
        tasks.splice(index, 1);
        setTasks([...tasks]);

    }
 
  return (
    <div className='container'>
        <div className='row' style={{marginTop:"200px"}}>
        
            <div className='col-4 offset-4'>

            <input type="text" name='task' value={state.task} className='form-control' placeholder='Task' onChange={handleChange}/><br/>
            <input type="date"  name='date' value={state.date} className='form-control' placeholder='Date' onChange={handleChange}/>
            <button  className='btn btn-primary' style={{marginTop:"10px"}}  onClick={clickHandler}>
                Add To Do

            </button>
            </div>



        </div>

        <div className='row'>

            <div className='col-6 offset-3'>
                {

                       
                    tasks.map((ele,i)=>(
                        <div key={i}>
                        <li>
                            Name - {ele.task}
                            Pending Date - {ele.date}
                        </li>
                        <button onClick={()=>deleteTask(i)} className='btn btn-danger' >
                            Delete Task

                        </button>
                        </div>

                    ))
                }

            </div>

</div>

    </div>
  )
}

export default Todo