import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import React, { useState, useEffect } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterToDos, setFilterToDos] = useState([]);
  
  useEffect(() => {
    getLocal();
  }, [])
  useEffect(() => {
   filterHandler();
   saveLocalToDos();
  }, [toDos, status])

  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilterToDos(toDos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilterToDos(toDos.filter(todo => todo.completed === false));
        break;
      default:
        setFilterToDos(toDos);
        break;
    }
  }
  //localStorage
  const saveLocalToDos = () => {
      localStorage.setItem('toDos', JSON.stringify(toDos));
  }
  const getLocal = () => {
    if(localStorage.getItem('toDos') === null){
      localStorage.setItem('toDos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("toDos"))
      setToDos(todoLocal);
    }
  }

  return (
    <div className="App">
      <div className="header">Todo-list</div>
      <Form
        toDos={toDos}
        setToDos={setToDos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus = {setStatus}
      />
      <ToDoList toDos={toDos} setToDos={setToDos} filterToDos={filterToDos}/>
    </div>
  );
}

export default App;
