import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Header from './Header';

const Home = () => {
    const [state,setState]=useState("Hello World !!");
    const [apiData,setApiData]=useState([]);
    const [cart,setCart]=useState([]);

    const addToCart=(product)=>{

      setCart([...cart,product]);
      



    }

    // Whenever you modify the state ,react --->re renders the component --->
    // this rerendering is basically --->component updation

    const loadInitialData=()=>{

        axios.get("https://fakestoreapi.com/products").then(response=>{
            // We will get the data from api
            setApiData(response.data)
        }).catch(err=>{
            console.log(err);
        })


        // doing some job
    }

    const sendCartToBackend=()=>{
        /// for now saving it to localstorage
        const cartObj=localStorage.getItem("cart");
        if (cartObj){
            const existingCart=JSON.parse(cartObj);
            existingCart.push(...cart);
            localStorage.setItem("cart",existingCart)

        }
        else{
           
            localStorage.setItem("cart",[...cart])
        }
       

    }

  
// Mounting phase --->In class based component you have a dedicated method -->componentDidMount
    useEffect(function(){
        // it gets called every time the component renders
        
        loadInitialData();
        // Which gets executed depneding on some conmditions
        console.log("Home Component Mounted")
        // If you to initialize something ,if you want to call an api ---->from backend to load data 
    },[])

    // For component did update phase or updation phase

    useEffect(()=>{
        sendCartToBackend();

        console.log("Product Added")

    })

 

    // Updation Phase

  return (
      <div className='container'>
           <Header cart={cart}/>
            <div className='row' style={{marginTop:"50px"}}>

{
    apiData.map(ele=>(
        <div className='col-4'>

        <div class="card" style={{width:"18rem"}}>
  <img src={ele.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{ele.title}</h5>
    <p class="card-text">{ele.description}</p>
    <button  class="btn btn-primary" onClick={()=>addToCart(ele)}>Add To Cart</button>
  </div>
</div>

        </div>

    ))
}





</div>

      </div>
  
  )
}

export default Home