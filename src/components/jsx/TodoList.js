import TodoItem from "./TodoItem";
import "../styles/TodoList.css";

const TodoList = (props) => {
  return (
    <div className="todoList">
      <TodoItem item={props.todos[0]} />
      <TodoItem item={props.todos[1]} />
      <TodoItem item={props.todos[2]} />
    </div>
  );
};

export default TodoList;
