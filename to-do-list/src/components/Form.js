import React, { useEffect } from 'react';
import Axios from 'axios';

const Form = ({inputText, setInputText, todos, setTodos, setStatus, completedCheck, setCompletedCheck}) => {

    // saves user input
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    
// Sends Input to the DB with axios
    const submitTodoHandler = (e) => {
        Axios.post("http://localhost:3001/insert", {description: inputText })
        // this stops refreshing page every time one submits
        e.preventDefault();
        // creates a todo item
        setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}])
        setInputText("");
    }

    

    return(
        <form>
            <input 
                value={inputText} 
                onChange={inputTextHandler} 
                type="text" 
                className="todo-input" 
            />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i> ADD </i>
            </button>
        </form>
    );
};

export default Form;