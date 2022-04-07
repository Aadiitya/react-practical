import React from "react";

const TodosList = ({ todos, setTodos, setEditTodo }) => {
  
  const handleComplete=(todo)=>{
     setTodos(
         todos.map((item) => {
             if(item.id === todo.id){
                 return {...item, completed: !item.completed}
             }
             return item;
         })
     )
  }

  const handleDelete = ({ id }) =>{
     setTodos(todos.filter((todo)=> todo.id !== id));
  }
  const handleEdit=({id})=>{
      const findTodo = todos.find((todo)=> todo.id === id)
      setEditTodo(findTodo)
    }

    return (
    <div>
      {todos.map((todos) => (
        <li className="todos-list" key={todos.id}>
          <input
            type="text"
            value={todos.title}
            className={`list ${todos.completed ? "complete" : ""}`}
            onChange={(e) => e.preventDefault()}
          />
          <div>
              <button className="button-complete task-button" onClick={() =>handleComplete(todos)}>
               <i className="fa fa-check-circle"></i>
              </button>
              <button className="button-edit task-button" onClick={()=> handleEdit(todos)}>
               <i className="fa fa-edit"></i>
              </button>
              <button className="button-delete task-button" onClick={()=> handleDelete(todos)}>
               <i className="fa fa-trash"></i>
              </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
