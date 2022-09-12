import React, { useEffect ,useState } from "react";
import Todo from "../components/Todo";
import Axios from 'axios';


const TodoList = ({ todos, setTodos, filteredTodos }) => {
    
    const [itemList,setItemList] = useState([]);// will hold items from the db
    //gets teh data fro the Db and sets it to itemList
    useEffect(() => {
        Axios.get("http://localhost:3001/read").then((response) => {
            console.log(response.data)
            setItemList(response.data); // sets item array to data from the array
        })
    },[])


    return(
        <div className="todo-container">
            <ul className="todo-list">
                { itemList.map((val) => (
                    <Todo
                     // maps every item in item list to a todo component that makes up the todo list
                     // these are teh required paramaters that need to be assigned
                        key={val._id} 
                        text={val.description} 
                        setTodos={setItemList}
                        todos={itemList}
                        todo={val}
                    />
                    
                    
                )) }
                {/* filtered todos is an array. map converts all the items into the list*/}
                {/*filteredTodos.map(todo => (
                    <Todo
                    // add check variable and id from db 
                        key={todo.id} 
                        text={todo.text} 
                        setTodos={setTodos}
                        todos={todos}
                        todo={todo}
                    />
                ))*/}
            </ul>
        </div>
    )
}

export default TodoList;