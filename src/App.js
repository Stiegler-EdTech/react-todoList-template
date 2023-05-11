import  { useState } from 'react';
import './App.css';
import TodoList from './components/jsx/TodoList';
import NewTodo from './components/jsx/NewTodo';

const App = () => {
  const [todos, setTodos] = useState([
    {id: 1, text: "Buy groceries", isChecked: false},
    {id: 2, text: "Do laundry", isChecked: false},
    {id: 3, text: "Finish project", isChecked: false}
  ]);

  const toggleTodo = id => {
    const newTodos = todos.map(todo =>
      (todo.id !== id) ? todo : {...todo, isChecked: !todo.isChecked}
    );
    setTodos(newTodos);
  };

  const addTodo = text => {
    const newTodo = { id: todos.length + 1, text, isChecked: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      
      <NewTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
