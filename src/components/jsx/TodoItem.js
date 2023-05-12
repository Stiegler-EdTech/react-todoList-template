import '../styles/TodoItem.css'
const TodoItem = (props) => {

  const todoCheckHandler = () => {
    
  }

  return (
    <div className="todoItem">
      <input 
        type="checkbox" 
        checked={props.item.isChecked} 
        onChange={todoCheckHandler}
      />
      <p>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;