      import React, { useState } from "react";

      import axios from "axios";

      const GoogleBooks = () => {
        const [state, setState] = useState([]);
        const [inputText, setInputText] = useState();

        const clickHandler = () => {
          if (inputText.trim()) {
            axios
              .get(`https://www.googleapis.com/books/v1/volumes?q=${inputText}`)
              .then((response) => {
                console.log(response.data.items);

                setState(response.data.items);
              })
              .catch((error) => {
                console.log("error");
              });

              
          }
          
        };

        
        const changeHandler = (event) => {
          setInputText(event.target.value);
        };
       
        const deleteTask=(index)=>{

          state.splice(index,1)
          setState([...state])
    
        }
         

        return (
          <div className="container">
            <div className="row">
              <div className="col-3 offset-4">
                <input
                  type="text"
                  onChange={changeHandler}
                  style={{ marginTop: 100,  width:300 }}
                ></input>

                <button
                  className="btn btn-primary"
                  onClick={clickHandler}
                  style={{ marginTop: 30,  width:300 }}
                >
                  Fetch Data
                </button>
              </div>
            </div>

            <div className="row">
              <div>
                <table class="table table-striped" style={{ marginTop: 20 }}>
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Sr.No</th>

                      <th scope="col">Book Name</th>
                      <th scope="col">Book Cover</th>
                      <th scope="col">Publisher</th>
                      <th scope="col">Pages</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                    state.map((ele, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{ele.volumeInfo.title}</td>
                        <td>
                          <img src={ele.volumeInfo?.imageLinks?.thumbnail}></img>
                        </td>
                        <td>{ele.volumeInfo?.publisher}</td>
                        <td>{ele.volumeInfo?.pageCount}</td>
                        <td><button className="btn btn-danger"  onClick={()=>deleteTask(index)}>Delete</button></td>
                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      };

      export default GoogleBooks;
