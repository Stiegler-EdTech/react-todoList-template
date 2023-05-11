import "./App.css";
import TodoList from "./components/jsx/TodoList";
import NewTodo from "./components/jsx/NewTodo";

const App = () => {
  const todos = [
    { id: 1, text: "Buy groceries", isChecked: false },
    { id: 2, text: "Do laundry", isChecked: false },
    { id: 3, text: "Finish project", isChecked: false },
  ];

  return (
    <div className="App">
      <h3>Simple Todo List</h3>
      <NewTodo />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
