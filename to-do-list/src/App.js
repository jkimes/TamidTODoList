
import './App.css';
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";



function App() {
  
  
  const [inputText, setInputText] = useState("");// value user types in for todo item
  const [todos, setTodos] = useState([]); // array of todo items
  const [status, setStatus] = useState("all");// string representing filter status
  const [filteredTodos, setFilteredTodos] = useState([]); // array of filtered objects
// renders app
  return (
    <div className="App">
      <header>
        <h1>ToDo List</h1>
      </header>
      
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText}
        setStatus={setStatus}
        
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
