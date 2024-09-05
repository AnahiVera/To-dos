
import React, { useState, useEffect } from "react";


export const GetApi = () => {

    const [baseUrl] = useState("https://playground.4geeks.com")
    const [todos, setTodos] = useState([])
    const [label, setLabel] = useState("")


    useEffect(() => {
        getTodos(`${baseUrl}/todo/users/AnahiVera`)
    }, [])



    const getTodos = (url) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((responseJson) => setTodos(responseJson.todos))
            .catch((error) => console.log("Error fetching:", error));
    }


    const saveTodos = () => {
        const todo = { label, is_done: false };
        const options = {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(`${baseUrl}/todo/todos/AnahiVera`, options)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to save");
                }
                return response.json();
            })
            .then((responseJson) => setTodos(todos => todos.concat(responseJson)))
            .catch((error) => console.log(" Error saving", error))
    }


    const deleteTodos = (id) => {  //error aqui
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(`${baseUrl}/todo/todos/${id}`, options)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to delete")
                }else{
                    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
                }
                
            })
            .catch((error) => console.log("Error deleting todo:", error))
    }


    const handleSubmit = (e) => {  
        e.preventDefault();
        saveTodos();
        setLabel("")
    }

    const handleDelete = (id) => {
        deleteTodos(id);
    }



    return (
        <div>
            <h1 className="text-center mt-5">Your To Do List!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="todo-input"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    placeholder="What do yo need to do?"
                />
                <button type="submit">Add</button>
            </form>
            <ul className="">
                {todos.map((todo) => (
                    <li key={todo.id} >
                        <span>{todo.label}</span>
                        <button className="btn" onClick={() => handleDelete(todo.id)}> <i className="fa-solid fa-trash"> </i></button>
                    </li>
                ))}
            </ul>
            <small> Pending {todos.length} tasks</small>
        </div>
    )
}
