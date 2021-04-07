import React from "react";
import ToDo from "../components/ToDo";

function ToDoList(props) {
    
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list" >
        {props.filterToDos.map(todo => (
            <ToDo key={todo.id} text={todo.text} toDos={props.toDos} setToDos={props.setToDos} todo={todo}/>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
