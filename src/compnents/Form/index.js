import react from "react";
import React from "react";
import { v4 as uuidv4 } from "uuid";
const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  
  const updateTodo = (title, id, completed)=>{
      const newTodo = todos.map((todo)=>
          todo.id === id ? {title, id, completed} : todo
      );
      setTodos(newTodo);
      setEditTodo("");
  }
  
  React.useEffect(() => {
      if(editTodo){
          setInput(editTodo.title);
      }else{
          setInput("")
      }

  }, [setInput, editTodo])
  
    const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(!editTodo){
    setTodos([...todos, {id: uuidv4(), title: input, completed: false}])
    setInput("");
     }else{
         updateTodo(input, editTodo.id, editTodo.completed);
        }  
};
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="New Task"
        value={input}
        required
        onChange={onInputChange}
        className="task-input"
      />
      <button className="button-add" type="submit">
        {editTodo ? "OK" : "Add"}
      </button>
    </form>
  );
};

export default Form;
