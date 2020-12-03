import React from "react";

const Todo = ({ todo, text, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    return (
<div className="todo">
    <li className="todo-tiem">{text}</li>
   
    <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
        </button>
</div>
    );
}

export default Todo;