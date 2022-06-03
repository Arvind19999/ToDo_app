import {useState,useEffect} from 'react';
import axios from "axios";

import Item from './Components/Item';
import './App.css';
// import { updateToDo } from '../../controller/ToDoController';

function App() {
  const[name, setText] = useState("");
  const[description, setDescription] = useState("");
  const [todo,setToDo] = useState([]);
  const [isUpdating,setUpdating] = useState("");

  useEffect(()=>{
    axios.get("http://localhost:5000/get_todo")
    .then((res)=>setToDo(res.data))
    .catch((err)=>console.log(err))
  })

  const addUpdate =()=>{
    console.log("The button is pressed");
    if(isUpdating ===""){
      axios.post("http://localhost:5000/save_todo",{name,description})
      .then((res)=>{
        console.log(res.data)
        setText("");
        setDescription("");

      })
      .catch((err)=>console.log(err));
    }else{
      axios.post("http://localhost:5000/update_todo",{_id : isUpdating,
    name,description})
    .then((res)=>{
      console.log(res.data)
      setText("");
      setDescription("");
      setUpdating("");
    })
    .catch((err)=>console.log(err));
    } 
  }

  const deleteToDo=(_id)=>{
    axios.post("http://localhost:5000/delete_todo",{_id})
    .then((res)=>{
      console.log(res.data);
    })
    .catch((err)=>console.log(err));
  }

  const updateToDo = (_id,name,description)=>{
    setUpdating(_id);
    setText(name);
    setDescription(description);
  }

  return (
    <div className="App">
     <div className="container">
       <h1> ToDo APP</h1>
        <div className="top">
            <input type="text"
            placeholder="Items to be bought....."
            value={name}
            onChange={(e)=>setText(e.target.value)}/>

            <input type="text"
            placeholder="Description of item......"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}/>

            {/* <div className="add"
            onClick={addUpdate}>
              {isUpdating?"Update":"Add"}
            </div> */}
{/* 
           <div>
          <input type="text"
          placeholder="Description of item......"
          value={name}
          onChange={(e)=>setText(e.target.value)}/>
          </div>

          <div>
          <input type="text"
          placeholder="Description of item......"
          value={name}
          onChange={(e)=>setText(e.target.value)}/>
          </div> */}

          <div className="add"
          onClick={addUpdate}>
            {isUpdating?"Update":"Add"}
          </div>
        </div>
        <div className="list">
        {todo.map(item=><Item 
        key = {item._id} 
        date={item.date} 
        name={item.name}
        description= {item.description}
        remove = {()=>deleteToDo(item._id)}
        update = {()=>updateToDo(item._id,item.name,item.description)}
        />)}

        
        </div>
     </div>
    </div>
  );
}

export default App;
