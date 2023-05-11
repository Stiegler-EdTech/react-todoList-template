import { useState } from 'react';
import '../styles/NewTodo.css'
const NewTodo = (props) => {
    const [inputValue, setInputValue] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (inputValue.trim()) {
        props.addTodo(inputValue.trim());
        setInputValue('');
      }
    };

    const inputChangeHandler = (event) => {
      setInputValue(event.target.value)
    }
  
    return (
      <form className="newTodoForm" onSubmit={handleSubmit}>
        <input
          className="newTodoInput"
          type="text"
          placeholder="Add new todo"
          value={inputValue}
          onChange={inputChangeHandler}
        />
        <button className="newTodoButton" type="submit">Add</button>
      </form>
    );
  };
  

export default NewTodo;