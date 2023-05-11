import TodoItem from './TodoItem';
import '../styles/TodoList.css'

const TodoList = (props) => {
    return (
      <div className="todoList">
        {props.todos.map(item => (
          <div className="todoItemContainer" key={item.id}>
            <TodoItem item={item} />
          </div>
        ))}
      </div>
    );
  }

export default TodoList;