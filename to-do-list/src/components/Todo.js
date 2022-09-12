import React, {useState,useEffect} from "react";
import axios from 'axios'; // library that lets you make api requests


const Todo = ({ text,setText, todo, todos, setTodos }) => {
    const [newDescription,setNewDescription] = useState('');

   // function that updates the todo item
    const updateListItem = (id) =>{
        console.log(id);
        axios.put("http://localhost:3001/update", {
            id: id, 
            newDescription: newDescription
        })
    }
    

    //deletes items from the db
    const deleteHandler = (id) => {
        axios.delete(`http://localhost:3001/delete/${id}`)
        //setTodos(todos.filter((el) => el.id !== todo.id));
    };

   

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{ text }</li>
            
            <input type="text" placeholder="Update Item"
            ></input>
            <button onClick={()=>updateListItem(todo._id)}>Update</button>
            <button onClick={()=> deleteHandler(todo._id)} className="complete-btn">
                <i>X</i>
            </button>
        </div>
    );
};

export default Todo;