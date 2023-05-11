import { useState } from 'react';
import '../styles/NewTodo.css'
const NewTodo = () => {
    const [inputValue, setInputValue] = useState('');
  
    const submitHandler = (event) => {
      event.preventDefault();
    };

    const inputChangeHandler = (event) => {
      setInputValue(event.target.value)
    }
  
    return (
      <form className="newTodoForm" onSubmit={submitHandler}>
        <input
          className="newTodoInput"
          type="text"
          placeholder="Add a new todo item"
          value={inputValue}
          onChange={inputChangeHandler}
        />
        <button className="newTodoButton" type="submit">Add</button>
      </form>
    );
  };
  

export default NewTodo;