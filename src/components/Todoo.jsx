 
import React,{useState,useRef} from 'react'
import './TodooButton.css'
 


const Todoo = () => {

  let rowuseref=useRef(null)
  let lblErrRef=useRef(null)
  let taskRef= useRef(null)
  let taskRef2= useRef(null)
  let taskRef3= useRef(null)


  const [state,setState]=useState({

     task:"",
     description:"",
     plannedDate:"",
       
  })

  const[tasks,setTasks]=useState([])

   const handleChange=(event)=>{
   

         setState({...state,[event.target.name]: event.target.value})

   }

    const clickHnadler=()=>{

      if(state.task.trim()&&state.plannedDate.trim() )
      {
      tasks.push(state)
      setTasks([...tasks],state) 
     

      } 

        setState({
            task:"",
            description:"",
            plannedDate:"",
             
        })
       
    }

    const deleteTask=(index)=>{

      tasks.splice(index,1)
      setTasks([...tasks])

    }
 
    const dateInputHandle=(event)=>{
     
      const date=event.target.value

      //const newdate=new Date(date)

     // const newdate2=new Date(state.plannedDate)
      
      if(state.plannedDate < date){

        rowuseref.current.style.border="thick solid #FFFF00"
        lblErrRef.current.style.visibility="visible"


      }

    }

    const chkHnadle=()=>{
        
      taskRef.current.style.textDecoration ="line-through	"
      taskRef2.current.style.textDecoration ="line-through	"
      taskRef3.current.style.textDecoration ="line-through	"

    }

     
    

  return (
      <>
    <div className='row' style={{marginTop:'50px'}}>
        <div className='col-4 offset-4'> 
        <input type="text" className='form-control' placeholder="Tasks" name="task" value={state.task} onChange={handleChange} />
        <input type="text" className='form-control' placeholder="Description" name="description" value={state.description} onChange={handleChange}  />
        <input type="date" className='form-control' placeholder="Planned Date " name="plannedDate" value={state.plannedDate} onChange={handleChange} style={{marginTop:"10px"}}/><br/>
        
        
        

        <button className='btn btn-primary addItm' style={{marginTop:"10px" ,hover:"pink"}} onClick={clickHnadler}>Add to Todo</button><br/><br/>
        </div>
    </div>

           


            <div className='row'>
                <div >
                   
                   <table class="table"> 
                   <thead class="thead-dark">
                                
                            <tr>
                            <th>Sr.No</th>
                            <th >Task</th>
                            <th >Description</th>
                            <th>Planned Date</th>
                            <th >Date of Completion</th>
                            <th>Mark as complete</th>
                            <th >Delete</th>
            
                            </tr> 
                     </thead> 

                     <tbody className='trRowContent'>  
                     {
                       tasks.map((ele,i)=>(
                    

                        <>
                       <tr ref={rowuseref}  >
                            <td >{i+1}.</td>
                            <td ref={taskRef} >{ele.task}</td>
                            <td ref={taskRef2} >{ele.description}</td>
                            <td ref={taskRef3}>{ele.plannedDate}</td>
                           
                            <td> <input type="date" onChange={dateInputHandle}></input></td>
                            <td> <input type="checkbox" onChange={chkHnadle}  ></input></td>
                             <td ><button className='btn btn-danger' onClick={()=>deleteTask(i)}>Delete Task</button></td>
                             
                            </tr>
                            
                            <label ref={lblErrRef} style={{color:"red",visibility:"hidden"}}>Due day is passed</label>
                            
                            </>
                           

                             ))}
                             
                            
                              
                                
                            </tbody>  

                      </table>
               
                </div>
            </div>
       </> 

  )
}

export default Todoo