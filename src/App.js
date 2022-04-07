import React from "react";
import "./App.css";
import Home from "./compnents/Home/index";
import Form from "./compnents/Form/index";
import TodosList from "./compnents/TodosList";

function App() {
  
  const[input, setInput] = React.useState("");
  const[todos, setTodos] = React.useState([]);
  const[editTodo, setEditTodo] = React.useState(null)

  

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Home />
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
